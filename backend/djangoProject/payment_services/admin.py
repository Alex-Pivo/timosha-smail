from django.contrib import admin
from .models import LiqpayPayment, InternationalPayment
from . import views
@admin.register(LiqpayPayment)
class LiqpayPaymentAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name', 'amount', 'currency', 'email', 'phone', 'status', 'created_at')
    search_fields = ('order_id', 'email', 'description')
    list_filter = ('currency', 'amount', 'created_at')
    readonly_fields = ('name', 'last_name', 'amount', 'currency', 'email', 'phone', 'status', 'created_at', 'order_id', 'hashed_order_id')
    exclude = ('hashed_order_id',)
    ordering = ('-created_at',)


    def check_payment_status(self):
        # order_ids = LiqpayPayment.objects.all().values_list('order_id')
        # order_id_lst = [i for x in order_ids for i in x]
        # for id in order_id_lst:
        #     print(id)
        status = views.LiqPayFunc.check_payment_status(order_id='order_270a9e494f21487eb8f667775456a7e5')
        print(status)



    def changelist_view(self, request, extra_context=None):
        self.check_payment_status()  # Call the function every time the list view is loaded
        return super().changelist_view(request, extra_context)
@admin.register(InternationalPayment)
class InternationalPaymentAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'email', 'phone', 'created_at')
    readonly_fields = ('name', 'surname', 'email', 'phone', 'created_at')
    ordering = ('-created_at',)
