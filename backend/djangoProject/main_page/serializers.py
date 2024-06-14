from rest_framework import serializers
from .models import MainPageSetting


class MainPageSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainPageSetting
        fields = '__all__'
