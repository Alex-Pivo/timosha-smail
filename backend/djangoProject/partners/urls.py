from django.urls import path
from . import views
urlpatterns = [

    path('<str:language>', views.PartnersView.as_view(), name='getPartner'),


]