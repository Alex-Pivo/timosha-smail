import os
from django.http import JsonResponse
from django.utils import timezone
from news.models import News

FRONTEND_PATH = '../../frontend/public'

def create_sitemap_xml(pages):
    """Створює або оновлює файл sitemap.xml у папці frontend."""
    sitemap_path = os.path.join(FRONTEND_PATH, 'sitemap.xml')

    # Генеруємо XML-вміст
    xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    for page in pages:
        xml_content += '  <url>\n'
        xml_content += f'    <loc>{page["loc"]}</loc>\n'
        xml_content += f'    <changefreq>{page["changefreq"]}</changefreq>\n'
        xml_content += f'    <lastmod>{timezone.now().date()}</lastmod>\n'
        xml_content += '  </url>\n'

    xml_content += '</urlset>'

    # Якщо файл sitemap.xml не існує, створюємо його, або оновлюємо вміст
    with open(sitemap_path, "w") as f:
        f.write(xml_content)


def sitemap_view(request):
    domain = 'https://timoshas-smile.org'
    supported_languages = ['ua', 'en', 'it', 'ru']

    # Генеруємо XML для статичних сторінок
    static_pages = []
    for lang in supported_languages:
        for page in ['donate', 'how-to-help', 'contacts', 'reports']:
            static_pages.append({
                'loc': f'{domain}/{lang}/{page}/',
                'changefreq': 'monthly',
            })

    # Додаємо динамічні новини
    news_items = News.objects.all().order_by('-created_at')
    dynamic_news = []
    for news in news_items:
        language = 'ua' if news.language == 'uk' else news.language  # Якщо мова 'uk', заміняємо на 'ua'
        slug = news.slug.replace('-uk', '-ua')  # Якщо в кінці є '-uk', заміняємо на '-ua'
        dynamic_news.append({
            'loc': f'{domain}/{language}/news/{slug}/',
            'changefreq': 'daily',
        })

    # Об'єднуємо всі сторінки
    all_pages = static_pages + dynamic_news

    # Створюємо або оновлюємо файл sitemap.xml
    create_sitemap_xml(all_pages)

    return JsonResponse({'status': 'sitemap updated'})
