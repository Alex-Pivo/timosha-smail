from django.utils.text import slugify
from django import forms
from django.contrib import admin
from unidecode import unidecode
from .models import News, ChooseLanguage
from .forms import NewsAdminForm


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'language', 'created_at','slug')
    search_fields = ('title', 'language')
    form = NewsAdminForm
    readonly_fields = ('slug',)

    # def save_model(self, request, obj, form, change):
    #     if not obj.slug:
    #         if obj.language in {ChooseLanguage.UKRAINIAN, ChooseLanguage.RUSSIAN}:
    #             title_transliterated = unidecode(obj.title)
    #         else:
    #             title_transliterated = obj.title
    #         base_slug = slugify(title_transliterated)
    #         language_suffix = obj.language.lower()
    #
    #         obj.slug = f'{base_slug}'
    #
    #         # Перевіряємо, чи є слаг унікальним
    #         original_slug = obj.slug
    #         counter = 1
    #         while News.objects.filter(slug=obj.slug).exists():
    #             obj.slug = f'{original_slug}-{counter}'
    #             counter += 1
    #
    #     super().save_model(request, obj, form, change)
