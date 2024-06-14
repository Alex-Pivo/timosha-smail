from django.urls import path
from . import views

urlpatterns = [
    path('<str:language>', views.GetReportsAndArticles.as_view(), name='reports_and_articles'),


]