import base64
import json
import hashlib
import uuid

from decimal import Decimal
from datetime import datetime
from . import settings
from .models import LiqpayPayment, InternationalPayment

from liqpay.liqpay import LiqPay
import urllib3
from hashlib import sha256

import logging
from decimal import Decimal, InvalidOperation
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)




logger = logging.getLogger(__name__)

class DonateView(APIView):
    def post(self, request, *args, **kwargs):
        name = request.data.get('name')
        last_name = request.data.get('last_name')
        email = request.data.get('email')
        phone = request.data.get('phone')
        amount = request.data.get('amount')
        currency = request.data.get('currency')
        is_subscription = request.data.get('is_subscription')
        print("ПІДПИСКА:",is_subscription,type(is_subscription))

        # Log the incoming data
        logger.info("Request data: name=%s, last_name=%s, email=%s, phone=%s, amount=%s, is_subscription=%s",
                    name, last_name, email, phone, amount, is_subscription)

        # Validate the amount
        try:
            amount = Decimal(amount)
        except (TypeError, InvalidOperation):
            logger.error("Invalid amount value: %s", amount)
            return Response({'error': 'Invalid amount value'}, status=status.HTTP_400_BAD_REQUEST)

        # Check required fields
        if not all([name, last_name, email, phone, amount]):
            logger.error("Missing required fields")
            return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)

        if settings.LIQPAY_PUBLIC_KEY and settings.LIQPAY_PRIVATE_KEY:
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
    def get(self, request,language, hashed_order_id):
        original_order_id_query = LiqpayPayment.objects.filter(hashed_order_id=hashed_order_id).values('order_id')
        if original_order_id_query.exists():
            original_order_id = original_order_id_query.first()['order_id']
            liqpay = LiqPayFunc(settings.LIQPAY_PUBLIC_KEY, settings.LIQPAY_PRIVATE_KEY)

            res = liqpay.api("request", {
                "action": "status",
                "version": "3",
                "order_id": original_order_id
            })
            if res.get('status') == 'success':
                try:
                    get_data_from_res = res.get('info')
                    info_parts = get_data_from_res.split(' ')
                    info_dict = dict(part.split(':', 1) for part in info_parts)

                    get_name = info_dict.get("Ім'я", "")
                    get_last_name = info_dict.get("Прізвище", "")
                    get_email = info_dict.get("Email", "")
                    get_phone = info_dict.get("Phone", "")
                    get_currency = res.get('currency', "")
                    get_amount = res.get('amount', "")
                    get_description = res.get('description', "")

                    # Оновлюємо існуючий об'єкт LiqpayPayment
                    payment = LiqpayPayment.objects.get(order_id=original_order_id)
                    payment.amount = get_amount
                    payment.currency = get_currency
                    payment.email = get_email
                    payment.phone = get_phone
                    payment.name = get_name
                    payment.last_name = get_last_name
                    payment.description = get_description
                    payment.status = 'Successfully donated'
                    payment.save()
                    return Response({'status': 'success'}, status=status.HTTP_202_ACCEPTED)

                except Exception as e:
                    print("Error occurred while processing payment data:", str(e))
            else:
                pass
                print('Статус не успішний')

        return Response({'status': res.get('status')})




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

        liqpay = LiqPayFunc(settings.LIQPAY_PUBLIC_KEY, settings.LIQPAY_PRIVATE_KEY)

        res = liqpay.api("request", {
                "action": "status",
                "version": "3",
                "order_id": 'order_270a9e494f21487eb8f667775456a7e5'
            })
        if res.get('status') == 'success':
                donate = LiqpayPayment.objects.get(order_id=order_id)
                donate.status = 'Successfully donated'
                donate.save()
                return res.get('status')


    @staticmethod
    def pay_view(amount,currency, name, last_name, phone, email, is_subscription: str, language='uk'):
        try:
            input_amount = Decimal(amount)
            if input_amount <= 0:
                raise ValueError()
        except (ValueError, TypeError):
            return Response({'error': 'Invalid amount'}, status=400)

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
            print(e)
        new_language = 'ua' if language == 'uk' else language

        params = {
            'version': '3',
            'public_key': settings.LIQPAY_PUBLIC_KEY,
            'private_key': settings.LIQPAY_PRIVATE_KEY,
            'action': 'pay',
            'amount': str(input_amount),
            'info': f"Ім'я:{name} Прізвище:{last_name} Email:{email} Phone:{phone}",
            'language': language,
            'currency': (currency if currency else 'UAH'),
            'description': ('Підтримка з сайту' if language =='uk' else 'Support from timoshas-smile.org'),
            'order_id': order_id,
            'server_url': f'http://95.169.204.16:8000/{language}/status/{hashed_order_id}',
            'result_url': f'http://95.169.204.16:3002/{new_language}/donate/status/{hashed_order_id}',
        }

        if is_subscription == 'true':
            todays_date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            params.update({
                'action': 'subscribe',
                'recurringbytoken': '1',
                'subscribe_date_start': todays_date,
                'subscribe_periodicity': 'month',
            })

        json_string = json.dumps(params, separators=(',', ':'))
        data = base64.b64encode(json_string.encode('utf-8')).decode('utf-8')

        signature = LiqPayFunc.generate_signature(settings.LIQPAY_PRIVATE_KEY, data)

        redirected_url = f'https://www.liqpay.ua/api/3/checkout/{data}/?signature={signature}'

        return {
            'redirected_url': redirected_url,
            'data': data,
            'signature': signature,
        }



class InternationalPaymentInformation(APIView):
    def post(self, request, *args, **kwargs):
        name = request.data.get('name')
        last_name = request.data.get('lastname')
        language = request.data.get('phone')
        email = request.data.get('email')
        try:
            InternationalPayment.objects.create(name=name, last_name=last_name, email=email)
            return Response({'status': 'success'})
        except Exception as e:
            return Response({'status': 'error'})






