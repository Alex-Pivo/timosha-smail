from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('', include('main_page.urls')),
    path('news/', include('news.urls')),
    path('donate/', include('payment_services.urls')),
    path('reports_articles/', include('reports.urls')),
    path('contact_with_us/', include('contact_with_us.urls')),
    path('partners/', include('partners.urls')),
    path('reviews/', include('reviews.urls')),
    path('email/', include('email_data.urls')),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

