from django.db import models
from django.urls import reverse
from django.utils import timezone

class ChooseLanguage(models.TextChoices):
    ukrainian = 'uk', 'Українська'
    english = 'en', 'English'
    italian = 'it', 'Italiano'
    russian = 'ru', 'Русский'


class Review(models.Model):
    name = models.CharField(max_length=150, verbose_name="Ім'я",blank=True,null=True,default=None)
    message = models.CharField(max_length=200,verbose_name="Відгук")
    image = models.ImageField(upload_to='media_storage/reviews_images', blank=True, null=True, default=None,verbose_name="Фото(не обов'язково)")
    language = models.CharField(max_length=30, choices=ChooseLanguage.choices, default=ChooseLanguage.ukrainian, verbose_name="Мова сайту")


    def __str__(self):
        return self.name if self.name else self.message

    def get_absolute_url(self):
        return reverse('review_detail', kwargs={'language': self.language})

    class Meta:
        verbose_name = "Відгук"
        verbose_name_plural = "Відгуки"