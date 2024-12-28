from django.db import models
from django.utils import timezone
from datetime import datetime
from django.urls import reverse



class ChooseLanguage(models.TextChoices):
    ukrainian = 'uk', 'Українська'
    english = 'en', 'English'
    italian = 'it', 'Italiano'
    russian = 'ru', 'Русский'



class Report(models.Model):
    year = models.CharField(max_length=4, default=str(datetime.now().year),verbose_name="Рік")
    first_description = models.TextField(max_length=255, blank=False, default='',verbose_name="Пункт 1 (обов'язковий) синій")
    second_description = models.TextField(max_length=255, blank=True, default='',verbose_name="Пункт 2 зелений")
    third_description = models.TextField(max_length=255, blank=True, default='',verbose_name="Пункт 3 помаранчевий")
    fourth_description = models.TextField(max_length=255, blank=True, default='',verbose_name="Пункт 4 рожевий")

    first_diagram_percent = models.FloatField(blank=False, default=0,verbose_name="Відсоток пункту 1")
    second_diagram_percent = models.FloatField(blank=True, default=0,verbose_name="Відсоток пункту 2")
    third_diagram_percent = models.FloatField(blank=True, default=0,verbose_name="Відсоток пункту 3")
    fourth_diagram_percent = models.FloatField(blank=True, default=0,verbose_name="Відсоток пункту 4")

    statement_file = models.FileField(blank=True, null=True, upload_to='media_storage/financial_files', default=None,verbose_name="Файл")
    statement_file_name = models.TextField(default=None, max_length=70, null=True, blank=True,verbose_name="Назва для файлу для звіту")
    language = models.CharField(max_length=30, choices=ChooseLanguage.choices, default=ChooseLanguage.ukrainian,verbose_name="Мова сайту")


    def __str__(self):
        return self.year

    def get_absolute_url(self):
        return reverse('report_detail', kwargs={'language': self.language})

    class Meta:
        verbose_name = "Звіт"
        verbose_name_plural = "Звіти"

class OurArticle(models.Model):
    article_title = models.CharField(max_length=50, blank=False,verbose_name="Заголовок статті")
    article_title_link = models.URLField(blank=False, default='',verbose_name="Посилання на статтю")
    article_content = models.TextField(blank=False,verbose_name="Текст")
    article_image = models.ImageField(upload_to='media_storage/financial_files', blank=False,verbose_name="Фото")

    language = models.CharField(max_length=30, choices=ChooseLanguage.choices, default=ChooseLanguage.ukrainian,verbose_name="Мова сайту")
    created_at = models.DateTimeField(default=timezone.now, verbose_name='Дата створення:')

    def get_absolute_url(self):
        return reverse('article_detail', kwargs={'language': self.language})

    def __str__(self):
        return self.article_title

    class Meta:
        verbose_name = "Стаття"
        verbose_name_plural = "Статті"



