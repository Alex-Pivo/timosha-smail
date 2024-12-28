from django.contrib import admin
from .models import LiqpayPayment, InternationalPayment
from . import views
from dotenv import load_dotenv
import os
load_dotenv()


@admin.register(LiqpayPayment)
class LiqpayPaymentAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name', 'amount', 'currency', 'email', 'phone', 'status', 'created_at')
    search_fields = ('order_id', 'email', 'description')
    list_filter = ('currency', 'amount', 'created_at')
    readonly_fields = ('name', 'last_name', 'amount', 'currency', 'email', 'phone', 'status', 'created_at', 'order_id', 'hashed_order_id')
    exclude = ('hashed_order_id',)
    ordering = ('-created_at',)


    def check_payment(self):
        order_ids = LiqpayPayment.objects.all().values_list('order_id')
        order_id_lst = [i for x in order_ids for i in x]
        liqpay = views.LiqPayFunc(os.getenv('LIQPAY_PUBLIC_KEY'), os.getenv('LIQPAY_PRIVATE_KEY'))
        for id in order_id_lst:
            res = liqpay.api("request", {
                "action": "status",
                "version": "3",
                "order_id": id,
            })
            if res.get('status') == 'success':
                payment = LiqpayPayment.objects.get(order_id=id)
                payment.status = 'Успішно оплачено'
                payment.save()
            elif res.get('status') == 'subscribed':
                payment = LiqpayPayment.objects.get(order_id=id)
                payment.status = 'Успішний регулярний платіж'
                payment.save()
                
            else:
                payment = LiqpayPayment.objects.get(order_id=id)
                payment.status = res.get('status')
                payment.save()



    def changelist_view(self, request, extra_context=None):
        self.check_payment()  # Call the function every time the list view is loaded
        return super().changelist_view(request, extra_context)
