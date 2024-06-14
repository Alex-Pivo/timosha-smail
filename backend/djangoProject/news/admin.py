from django.contrib import admin
from .models import News
from django import forms

class NewsAdminForm(forms.ModelForm):
    class Meta:
        model = News
        help_texts = {
            'description': 'Введіть повний опис',
            'short_description': 'Введіть скорочений текст який буде показуватись на сторінці зі всіма новинами(і в кінці три крапки ...)',
            'content': 'Введіть текст новини',
            'slug': "slug - це текстова строка, яка використовується в URL-адресі для ідентифікації конкретного ресурсу на вашому сайті. Часто це текст, який містить тільки букви, цифри та деякі спеціальні символи, і що розділяється дефісами. Наприклад(timosha-org.ua/news/<strong>zsittja-romi-pislja-operaciji</strong>)"
        }
        fields = "__all__"

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'language','created_at')
    search_fields = ('title', 'language')
    form = NewsAdminForm

