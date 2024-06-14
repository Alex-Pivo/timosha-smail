from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings




urlpatterns = [
    path('<str:language>/', views.MainPage.as_view(), name='main_page'),
    path('', views.OnlyUKPageData.as_view(), name='main_page_ukr')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
