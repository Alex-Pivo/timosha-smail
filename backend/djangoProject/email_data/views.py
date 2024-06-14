import smtplib
from django.shortcuts import render, redirect
# from .forms import TagForm
from .models import SubscribedUsersEmail
from django.core.mail import send_mail
import logging
from rest_framework.response import Response
from rest_framework.views import APIView


logging.basicConfig(level=logging.DEBUG)


class EmailView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        language = request.data.get('language')
        existing_email = SubscribedUsersEmail.objects.filter(email=email).first()
        if not existing_email:
            SubscribedUsersEmail.objects.create(email=email, language=language)
            return Response({'status': 'success'})
        return Response({'status': 'user_already_exists'})





