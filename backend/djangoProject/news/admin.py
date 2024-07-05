from django.contrib import admin
from .models import News,ChooseLanguage
from .forms import NewsAdminForm
from unidecode import unidecode
from django.utils.text import slugify


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'language', 'created_at')
    search_fields = ('title', 'language')
    form = NewsAdminForm

    def save_model(self, request, obj, form, change):
        if not obj.slug:
            if obj.language in {ChooseLanguage.UKRAINIAN, ChooseLanguage.RUSSIAN}:
                title_transliterated = unidecode(obj.title)
            else:
                title_transliterated = obj.title
            obj.slug = slugify(f'{title_transliterated}-{obj.language}')
            while News.objects.filter(slug=obj.slug).exists():
                obj.slug = f'{obj.slug}-{obj.pk}'
        super().save_model(request, obj, form, change)
