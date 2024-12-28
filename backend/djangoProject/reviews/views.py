from django.shortcuts import render
from rest_framework import viewsets

from .models import Review
from .serializers import ReviewSerializer
from rest_framework.response import Response
from rest_framework.views import APIView


class ReviewView(APIView):
    def get(self, request, language):
        reviews = Review.objects.filter(language=language)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)


