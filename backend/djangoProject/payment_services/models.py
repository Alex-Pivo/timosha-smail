import uuid
from django.db import models
from decimal import Decimal
from django.utils import timezone
from django.db import models
from hashlib import sha256
from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from hashlib import sha256
from django.utils import timezone

from django.db import models
from hashlib import sha256
from django.utils import timezone

class LiqpayPayment(models.Model):
    amount = models.IntegerField(editable=False, null=True,verbose_name="Сума")
    currency = models.CharField(max_length=4, default='UAH', editable=False,verbose_name="Валюта")
    email = models.EmailField(blank=False, editable=False,verbose_name="Електронна пошта")
    phone = models.CharField(max_length=20, blank=False, editable=False,verbose_name="Номер телефону")
    name = models.CharField(max_length=15, editable=False,verbose_name="Ім'я")
    last_name = models.CharField(max_length=20, editable=False,verbose_name="Фамілія")
    description = models.TextField(blank=False, editable=False,verbose_name="Опис")
    status = models.CharField(max_length=255, editable=False,verbose_name="Статус")
    order_id = models.CharField(max_length=255, blank=True, null=True,verbose_name="ID платежу")
    hashed_order_id = models.CharField(max_length=255, editable=False, unique=True, default=' ',verbose_name="Закодований ID платежу")
    created_at = models.DateTimeField(default=timezone.now,verbose_name="Створено")

    @staticmethod
    def verify_order_id(hashed_order_id, received_order_id):
        return sha256(received_order_id.encode()).hexdigest() == hashed_order_id

    def __str__(self):
        return f"{self.name} {self.last_name} - {self.created_at}"

    class Meta:
        verbose_name_plural = "Платежі Liqpay"
        verbose_name = "Платіж Liqpay"



class InternationalPayment(models.Model):
    name = models.CharField(max_length=30,verbose_name="Ім'я")
    surname = models.CharField(max_length=30,verbose_name="Фамілія")
    email = models.EmailField(null=False, blank=False,verbose_name="Електронна пошта")
    phone = models.CharField(max_length=15, null=False, blank=False,verbose_name="Номер телефону")
    created_at = models.DateTimeField(default=timezone.now,verbose_name="Створено")


    def __str__(self):
        return self.name


    class Meta:
        verbose_name_plural = "Міжнародні перекази"
        verbose_name = "Міжнародний переказ"

