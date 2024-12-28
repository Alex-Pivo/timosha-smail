from rest_framework import serializers
from .models import News

class NewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
        fields = '__all__'

    # def get_translations(self, obj):
    #     translations = obj.main_news.translations_set.all()
    #     return NewsSerializer(translations, many=True).data
