from django.db import models


class ChooseLanguage(models.TextChoices):
    ukrainian = 'uk', 'Українська'
    english = 'en', 'English'
    italian = 'it', 'Italiano'
    russian = 'ru', 'Русский'


class MainPageSetting(models.Model):
    child_name1 = models.CharField(max_length=20, blank=False, verbose_name="Ім'я дитини 1",default='')
    read_story1 = models.CharField(max_length=25, blank=True,
                                   verbose_name='Читати історію для дитини 1 ("e.x:Святослава,Ірини") :')
    child_age1 = models.CharField(max_length=20, blank=False, default='2 роки', verbose_name="Вік дитини 1")
    image1 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,
                               verbose_name="Фото 1")
    image_url_new1 = models.URLField(verbose_name="Посилання статті на 'Фото 1'", blank=True, null=False, default='')


    child_name2 = models.CharField(max_length=20, blank=False, verbose_name="Ім'я дитини 2",default='')
    read_story2 = models.CharField(max_length=25, blank=True,
                                   verbose_name='Читати історію для дитини 2 ("e.x:Святослава,Ірини") :')
    child_age2 = models.CharField(max_length=20, blank=False, default='2 роки', verbose_name="Вік дитини 2")
    image2 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,
                               verbose_name="Фото 2")
    image_url_new2 = models.URLField(verbose_name="Посилання статті на 'Фото 1'", blank=True, null=False, default='')


    child_name3 = models.CharField(max_length=20, blank=False, verbose_name="Ім'я дитини 3",default='')
    read_story3 = models.CharField(max_length=25, blank=True,
                                   verbose_name='Читати історію для дитини 3 ("e.x:Святослава,Ірини") :')
    child_age3 = models.CharField(max_length=20, blank=False, default='2 роки', verbose_name="Вік дитини 3"
                                  )
    image3 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,
                               verbose_name="Фото 3")
    image_url_new3 = models.URLField(verbose_name="Посилання статті на 'Фото 1'", blank=True, null=False, default='')


    child_name4 = models.CharField(max_length=20, blank=False, verbose_name="Ім'я дитини 3",default='')
    read_story4 = models.CharField(max_length=25, blank=True,
                                   verbose_name='Читати історію для дитини 4 ("e.x:Святослава,Ірини") :')
    child_age4 = models.CharField(max_length=20, blank=False, default='2 роки', verbose_name="Вік дитини 4"
                                  )
    image4 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,
                               verbose_name="Фото 4")
    image_url_new4 = models.URLField(verbose_name="Посилання статті на 'Фото 1'", blank=True, null=False, default='')


    child_name5 = models.CharField(max_length=20, blank=False, verbose_name="Ім'я дитини 5",default='')
    read_story5 = models.CharField(max_length=25, blank=True,
                                   verbose_name='Читати історію для дитини 5 ("e.x:Святослава,Ірини") :')
    child_age5 = models.CharField(max_length=20, blank=False, default='2 роки', verbose_name="Вік дитини 5"
                                  )
    image5 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,
                               verbose_name="Фото 5")
    image_url_new5 = models.URLField(verbose_name="Посилання статті на 'Фото 1'", blank=True, null=False, default='')


    child_name6 = models.CharField(max_length=20, blank=False, verbose_name="Ім'я дитини 6",default='')
    read_story6 = models.CharField(max_length=25, blank=True,
                                   verbose_name='Читати історію для дитини 6 ("e.x:Святослава,Ірини") :')
    child_age6 = models.CharField(max_length=20, blank=False, default='2 роки', verbose_name="Вік дитини 6"
                                  )
    image6 = models.ImageField(upload_to='media_storage/main_page_images', blank=False, default=None,
                               verbose_name="Фото 6")
    image_url_new6 = models.URLField(verbose_name="Посилання статті на 'Фото 1'", blank=True, null=False, default='')


    language = models.CharField(max_length=30, choices=ChooseLanguage.choices, default=ChooseLanguage.ukrainian,
                                verbose_name="Мова сайту")

    def __str__(self):
        return self.child_name1  # Assuming the primary representation of the model should be the first child's name

    class Meta:
        verbose_name_plural = 'Налаштування фотографій діточок на головній сторінці'
        verbose_name = 'Параметри головної сторінки'
