from django.shortcuts import render
from .models import Report, OurArticle
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response

class GetReportsAndArticles(APIView):
    def get(self, request, language):
        get_reports = Report.objects.filter(language=language).values()
        get_articles = OurArticle.objects.filter(language=language).values()
        articles_data = list(get_articles)
        reports_data = list(get_reports)
        return Response({'data': reports_data, 'articles': articles_data})



