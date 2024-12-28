from django.contrib import admin
from django.urls import path, include
from django.conf import settings  # Імпорт для доступу до налаштувань
from django.conf.urls.static import static  # Для обробки статичних файлів
from django.contrib.sitemaps.views import sitemap
from sitemaps.sitemap import sitemap_view  # Імпорт для вашого sitemap

urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('<str:language>/', include('main_page.urls')),
    path('news/', include('news.urls')),
    path('donate/', include('payment_services.urls')),
    path('reports_articles/', include('reports.urls')),
    path('contact_with_us/', include('contact_with_us.urls')),
    path('partners/', include('partners.urls')),
    path('reviews/', include('reviews.urls')),
    path('email/', include('email_data.urls')),
    path('api/update-sitemap', sitemap_view, name='sitemap'),
]

# Додайте статичні файли та медіа файли для режиму DEBUG
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
