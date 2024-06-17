from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse,HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import News
from .serializers import NewsSerializer

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

class SortNewsByCategory(APIView):
    def get(self, request, category, language):
        category_mappings = {
            'all_news': 'all_news',
            'important': 'important',
            'childs_history': 'childs_history',
            'fond_achievements': 'fond_achievements',
            'your_help': 'your_help',
            'life_of_fond': 'life_of_fond',
            'interview': 'interview'
        }

        category_key = category_mappings.get(category)

        if category_key == 'all_news':
            news = News.objects.filter(language=language)
        else:
            news = News.objects.filter(category=category_key, language=language)

        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)



