from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Partner
from .serializers import PartnerSerializer


class PartnersView(APIView):
    def get(self,request,language):
        partners = Partner.objects.filter(language=language)
        serializer = PartnerSerializer(partners,many=True)
        return Response(serializer.data)