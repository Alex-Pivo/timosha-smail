from rest_framework.views import APIView
from rest_framework.response import Response
from .models import News
from .serializers import NewsSerializer
from unidecode import unidecode
from django.utils.text import slugify

class GetNewsList(APIView):
    def get(self, request, language):
        news = News.objects.filter(language=language)
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)

class GetNewsDetail(APIView):
    def get(self, request, slug, language):
        news = News.objects.filter(language=language, slug=slug).first()
        serializer = NewsSerializer(news)
        return Response(serializer.data)

class GetNewOnAnotherLanguage(APIView):
    def get(self,request,slug):
        new = News.objects.filter(slug=slug).first()
        serializer = NewsSerializer(new)
        return Response(serializer.data)

class SortNewsByCategory(APIView):
    def get(self, request, category, language):
        category_mappings = {
            'all_news': 'all_news',
            'clinic': 'clinic',
            'evacuation': 'evacuation',
            'fond_achievements': 'fond_achievements',
            'your_help': 'your_help',
            'life_of_fond': 'life_of_fond',
            'interview': 'interview',
            'important': 'important',
        }

        category_key = category_mappings.get(category)

        if category_key == 'all_news':
            news = News.objects.filter(language=language)
        else:
            news = News.objects.filter(category=category_key, language=language)

        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)
