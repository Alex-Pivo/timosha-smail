from django.urls import path
from . import views

app_name = 'payment_services'

urlpatterns = [
    # path('<str:language>', views.DonatePage.as_view(), name='donate_page'),
    path('<str:language>/', views.DonateView.as_view(), name='donate'),
    path('<str:language>/status/<str:hashed_order_id>', views.LiqPaymentAPI.as_view(), name='pay_callback'),
    path('internation_payment',views.InternationPaymentInformation.as_view(),name='international_payment'),
]
# zminiti na <str:language>
