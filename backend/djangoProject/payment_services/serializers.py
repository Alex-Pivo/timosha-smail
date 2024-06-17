from rest_framework import serializers
from .models import LiqpayPayment,InternationalPayment

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = LiqpayPayment
        fields = ['name', 'last_name', 'phone', 'email', 'amount']

    amount = serializers.IntegerField(allow_null=False, required=True)
    # currency =serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    phone = serializers.CharField(required=True)
    name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)


class InternationalPaymentSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    phone = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)

    class Meta:
        model = InternationalPayment
        fields = ['name', 'last_name', 'phone', 'email']
