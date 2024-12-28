import base64
import hashlib
import json
import logging
import uuid
from datetime import datetime
from decimal import Decimal, InvalidOperation
from hashlib import sha256

import urllib3
from liqpay.liqpay import LiqPay
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import LiqpayPayment
from dotenv import load_dotenv
import os

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
logger = logging.getLogger(__name__)
load_dotenv()

class DonateView(APIView):
    def post(self, request, *args, **kwargs):
        name = request.data.get('name')
        last_name = request.data.get('last_name')
        email = request.data.get('email')
        phone = request.data.get('phone')
        amount = request.data.get('amount')
        currency = request.data.get('currency')
        is_subscription = request.data.get('is_subscription')
        try:
            amount = Decimal(amount)
        except (TypeError, InvalidOperation):
            logger.error("Invalid amount value: %s", amount)
            return Response({'error': 'Invalid amount value'}, status=status.HTTP_400_BAD_REQUEST)

        if not all([name, last_name, email, phone, amount]):
            logger.error("Missing required fields")
            return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)

        public_key = os.getenv('LIQPAY_PUBLIC_KEY')
        private_key = os.getenv('LIQPAY_PRIVATE_KEY')

        if public_key and private_key:
            try:
                payment = LiqPayFunc.pay_view(
                    amount=amount,
                    currency=currency,
                    name=name,
                    last_name=last_name,
                    phone=phone,
                    email=email,
                    is_subscription=is_subscription
                )
                return Response(payment, status=status.HTTP_201_CREATED)
            except Exception as e:
                logger.error("Payment processing error: %s", str(e))
                return Response({'error': 'Payment processing failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            logger.error("LiqPay keys are not configured")
            return Response({'error': 'LiqPay keys are not configured'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class LiqPaymentAPI(APIView):
    def get(self, request, language, hashed_order_id):
        try:
            original_order_id = LiqpayPayment.objects.filter(hashed_order_id=hashed_order_id).values('order_id').first()['order_id']
        except (LiqpayPayment.DoesNotExist, TypeError):
            return Response({'status': 'not_found'}, status=status.HTTP_404_NOT_FOUND)

        public_key = os.getenv('LIQPAY_PUBLIC_KEY')
        private_key = os.getenv('LIQPAY_PRIVATE_KEY')

        if not public_key or not private_key:
            return Response({'status': 'error', 'message': 'LiqPay keys are not configured'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        liqpay = LiqPayFunc(public_key, private_key)
        res = liqpay.api("request", {
            "action": "status",
            "version": "3",
            "order_id": original_order_id
        })

        if res.get('status') in ['success', 'subscribed', 'wait_accept']:
            try:
                self.process_payment_data(res, original_order_id, res.get('status'))
                return Response({'status': 'success'}, status=status.HTTP_202_ACCEPTED)
            except Exception as e:
                logger.error("Error occurred while processing payment data: %s", str(e))
                return Response({'status': 'error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'status': res.get('status')})

    def process_payment_data(self, res, order_id, status):
        info_dict = dict(part.split(':', 1) for part in res.get('info', '').split(' '))

        try:
            payment = LiqpayPayment.objects.get(order_id=order_id)
            payment.amount = res.get('amount', "")
            payment.currency = res.get('currency', "")
            payment.email = info_dict.get("Email", "")
            payment.phone = info_dict.get("Phone", "")
            payment.name = info_dict.get("Ім'я", "")
            payment.last_name = info_dict.get("Прізвище", "")
            payment.description = res.get('description', "")
            if status == 'success' or status == 'wait_accept':
                payment.status = 'Успішно оплачено'
            elif status == 'subscribed':
                payment.status = 'Успішний регулярний платіж'
            else:
                payment.status = f'Статус:{res.get("status")}'
            payment.save()
        except LiqpayPayment.DoesNotExist:
            logger.error("Payment record not found for order_id: %s", order_id)

class LiqPayFunc:
    def __init__(self, public_key, private_key):
        self.public_key = public_key
        self.private_key = private_key
        self.liqpay = LiqPay(public_key, private_key)

    def api(self, action, params):
        return self.liqpay.api(action, params)

    @staticmethod
    def generate_signature(private_key, data):
        sign_string = private_key + data + private_key
        signature = base64.b64encode(hashlib.sha1(sign_string.encode('utf-8')).digest()).decode('utf-8')
        return signature

    @staticmethod
    def generate_order_id():
        order_id = f'order_{uuid.uuid4().hex}'
        return order_id

    @staticmethod
    def check_payment_status(order_id):
        public_key = os.getenv('LIQPAY_PUBLIC_KEY')
        private_key = os.getenv('LIQPAY_PRIVATE_KEY')

        if not public_key or not private_key:
            return Response({"status": "error", "message": "LiqPay keys are not configured"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        liqpay = LiqPayFunc(public_key, private_key)

        res = liqpay.api("request", {
            "action": "status",
            "version": "3",
            "order_id": order_id
        })
        if res.get('status') in ['success', 'subscribed']:
            donate = LiqpayPayment.objects.filter(order_id=order_id).first()
            if donate:
                donate.status = 'Успішно оплачено' if res.get('status') == 'success' else 'Успішний регулярний платіж'
                donate.save()
            return Response({"status": "success"})
        return Response({"status": "error"})

    @staticmethod
    def pay_view(amount, currency, name, last_name, phone, email, is_subscription: str, language='uk'):
        try:
            input_amount = Decimal(amount)
            if input_amount <= 0:
                raise ValueError("Amount must be greater than zero.")
        except (ValueError, TypeError):
            return {'error': 'Invalid amount'}, 400

        order_id = LiqPayFunc.generate_order_id()
        hashed_order_id = sha256(order_id.encode()).hexdigest()
        try:
            LiqpayPayment.objects.create(
                amount=input_amount,
                currency=(currency if currency else 'UAH'),
                email=email,
                phone=phone,
                name=name,
                last_name=last_name,
                status='В процесі...',
                order_id=order_id,
                hashed_order_id=hashed_order_id,
            )
        except Exception as e:
            logger.error("Error creating LiqpayPayment record: %s", str(e))
            return {'error': 'Error creating payment record'}, 500

        new_language = 'ua' if language == 'uk' else language

        params = {
            'version': '3',
            'public_key': os.getenv('LIQPAY_PUBLIC_KEY'),
            'private_key': os.getenv('LIQPAY_PRIVATE_KEY'),
            'action': 'pay',
            'amount': str(input_amount),
            'info': f"Ім'я:{name} Прізвище:{last_name} Email:{email} Phone:{phone}",
            'language': language,
            'currency': (currency if currency else 'UAH'),
            'description': ('Підтримка з сайту' if language == 'uk' else 'Support from timoshas-smile.org'),
            'order_id': order_id,
            'server_url': f'https://timoshas-smile.org:8443/{language}/status/{hashed_order_id}',
            'result_url': f'https://timoshas-smile.org/{new_language}/donate/status/{hashed_order_id}',
            'phone': phone,
        }
        logger.info(f'Phone: {phone}')
        if is_subscription == 'true':
            todays_date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            params.update({
                'action': 'subscribe',
                'recurringbytoken': '1',
                'phone': phone,
                'subscribe_date_start': todays_date,
                'subscribe_periodicity': 'month',
            })

        json_string = json.dumps(params, separators=(',', ':'))
        data = base64.b64encode(json_string.encode('utf-8')).decode('utf-8')

        signature = LiqPayFunc.generate_signature(os.getenv('LIQPAY_PRIVATE_KEY'), data)

        redirected_url = f'https://www.liqpay.ua/api/3/checkout/{data}/?signature={signature}'

        return {
            'redirected_url': redirected_url,
            'data': data,
            'signature': signature,
        }
