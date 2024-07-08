from django import forms
from django.utils.text import slugify
from unidecode import unidecode
from .models import News, ChooseLanguage

class NewsAdminForm(forms.ModelForm):
    existing_slugs = forms.ModelChoiceField(
        queryset=News.objects.filter(language='uk').order_by('created_at'),

        required=False,
        label="Виберіть існуючий Slug",
        help_text="Обирайте лише якщо хочете використовувати вже існуючий Slug але на іншій мові"
    )


    def clean(self):
        cleaned_data = super().clean()
        existing_slug_instance = cleaned_data.get('existing_slugs')
        language = cleaned_data.get('language')
        title = cleaned_data.get('title')

        if existing_slug_instance:
            base_slug = existing_slug_instance.slug
            for lang_code, _ in ChooseLanguage.choices:
                if base_slug.endswith(f'-{lang_code}'):
                    base_slug = base_slug[:-len(f'-{lang_code}')]
                    break
        else:
            base_slug = slugify(unidecode(title))

        if language:
            language_suffix = language.lower()
            cleaned_data['slug'] = f'{base_slug}-{language_suffix}'

        return cleaned_data

    def save(self, commit=True):
        instance = super().save(commit=False)

        existing_slug_instance = self.cleaned_data.get('existing_slugs')
        if existing_slug_instance:
            base_slug = existing_slug_instance.slug
            for lang_code, _ in ChooseLanguage.choices:
                if base_slug.endswith(f'-{lang_code}'):
                    base_slug = base_slug[:-len(f'-{lang_code}')]
                    break
        else:
            base_slug = slugify(unidecode(instance.title))

        language_suffix = instance.language.lower()
        instance.slug = f'{base_slug}-{language_suffix}'

        if commit:
            instance.save()
        return instance
