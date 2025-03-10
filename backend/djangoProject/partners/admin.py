from django.contrib import admin
from .models import Partner
from django import forms

class PartnerForms(forms.ModelForm):
    class Meta:
        model = Partner
        fields = '__all__'
        help_texts = {'description': '(до 255 символів)','image':
                      "Лого партнера буде відображатися одразу на всіх мовах сайту на головній сторінці (тільки лого)"}

@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ['partner_name', 'language']
    search_fields = ['partner_name', 'language']
    form = PartnerForms
