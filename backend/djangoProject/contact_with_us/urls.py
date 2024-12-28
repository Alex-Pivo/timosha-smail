from django.urls import path
from . import views

urlpatterns = [
    path('<str:language>/', views.UsersRequestView.as_view(), name='contact_with_us'),
]
