from rest_framework import serializers
from .models import LiqpayPayment

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = LiqpayPayment
        fields = ['name', 'last_name', 'phone', 'email', 'amount']

    amount = serializers.IntegerField(allow_null=True, required=True)
    email = serializers.EmailField(required=True)
    phone = serializers.CharField(required=True)
    name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
