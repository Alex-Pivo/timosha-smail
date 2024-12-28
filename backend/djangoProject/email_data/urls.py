# email_data/urls.py
from django.urls import path
from . import views
# from .views import send_email_to_all_subscribers


app_name = 'email_data'

urlpatterns = [
    path('send_data/', views.EmailView.as_view(), name='send_data'),
    # path('index/', views.index, name='index'),

    # path('/test', views.test, name='test'),

]
