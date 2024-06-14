from django.contrib import admin
from .models import LiqpayPayment,InternationalPayment
from django.db import models

@admin.register(LiqpayPayment)
class LiqpayPaymentAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name', 'amount', 'currency','email','phone','status','created_at')
    search_fields = ('order_id', 'email', 'description')
    list_filter = ('currency','amount','created_at')
    readonly_fields = ('name', 'last_name', 'amount', 'currency','email','phone','status','created_at','order_id','hashed_order_id')
    exclude = ('hashed_order_id',)

@admin.register(InternationalPayment)
class InternationalPaymentAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'email', 'phone', 'created_at')
    readonly_fields = ('name', 'surname', 'email', 'phone', 'created_at')


#
# @admin.register(USACheck)
# class USACheckAdmin(admin.ModelAdmin):
#     list_display = ('from_name', 'for_name', 'amount', 'created_at')
#     readonly_fields = ('from_name', 'for_name', 'amount', 'created_at')