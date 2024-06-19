from django.db import models


class ChooseLanguage(models.TextChoices):
    ukrainian = 'uk', 'Українська'
    english = 'en', 'English'
    italian = 'it', 'Italiano'
    russian = 'ru', 'Русский'


class MainPageSetting(models.Model):
    child_name = models.TextField(max_length=20, blank=False,verbose_name="Ім'я дитини")
    child_age = models.CharField(max_length=20, blank=False,default='2 роки', verbose_name="Вік дитини")
    image1 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,verbose_name="Фото 1")
    image2 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,verbose_name="Фото 2")
    image3 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,verbose_name="Фото 3")
    image4 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,verbose_name="Фото 4")
    image5 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,verbose_name="Фото 5")
    image6 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,verbose_name="Фото 6")
    image1_url_new = models.URLField(verbose_name="Посилання статті на 'Фото 1 '")
    language = models.CharField(max_length=30, choices=ChooseLanguage.choices, default=ChooseLanguage.ukrainian,verbose_name="Мова сайту")

    def __str__(self):
        return self.child_name

    class Meta:
        verbose_name_plural = 'Налаштування фотографій діточок на головній сторінці'
        verbose_name = 'Параметри головної сторінки'
