from django.urls import path
from . import views

urlpatterns = [

    path('<str:language>', views.ReviewView.as_view(), name='review')

]