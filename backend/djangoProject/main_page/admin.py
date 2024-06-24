from django import forms
from django.contrib import admin
from .models import MainPageSetting



@admin.register(MainPageSetting)
class ChangeImagesAdmin(admin.ModelAdmin):
    list_display = ['language']
