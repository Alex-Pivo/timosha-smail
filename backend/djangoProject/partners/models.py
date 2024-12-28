from django.db import models
from django.urls import reverse
from django.utils import timezone

class ChooseLanguage(models.TextChoices):
    ukrainian = 'uk', 'Українська'
    english = 'en', 'English'
    italian = 'it', 'Italiano'
    russian = 'ru', 'Русский'


class Partner(models.Model):
    partner_name = models.CharField(max_length=40,verbose_name="Ім'я партнера/Назва компанії")
    description = models.CharField(max_length=100,verbose_name="Короткий опис")
    image = models.ImageField(upload_to='media_storage/partners_images', blank=False, null=False,default=None,verbose_name="Лого партнера")
    company_url = models.URLField(blank=True, null=True, default=None,verbose_name="Посилання на сайт/соц.мережу")
    language = models.CharField(max_length=30, choices=ChooseLanguage.choices, default=ChooseLanguage.ukrainian,verbose_name="Мова сайту")
    created_at = models.DateTimeField(default=timezone.now, verbose_name='Дата створення:')

    def get_absolute_url(self):
        return reverse('partners_detail', kwargs={'language': self.language})

    def __str__(self):
        return self.partner_name

    class Meta:
        verbose_name = "Партнер"
        verbose_name_plural = "Партнери"
