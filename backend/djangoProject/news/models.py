from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.utils.text import slugify
from unidecode import unidecode

class ChooseLanguage(models.TextChoices):
    UKRAINIAN = 'uk', 'Українська'
    ENGLISH = 'en', 'English'
    ITALIAN = 'it', 'Italiano'
    RUSSIAN = 'ru', 'Русский'


class Category(models.TextChoices):
    EVACUATION = 'evacuation', 'Евакуація'
    FOND_ACHIVMENTS = 'fond_achievments', 'Досягнення фонду'
    CLINIC = 'clinic', 'Клініка'
    YOUR_HELP = 'your_help', 'Ваша допомога'
    LIFE_OF_FOND = 'life_of_fond', 'Життя фонду'
    INTERVIEW = 'interview', 'Інтерв’ю'
    IMPORTANT = 'important', 'Важливе'





class News(models.Model):
    title = models.CharField(max_length=100, verbose_name='Заголовок')
    description = models.TextField(max_length=400, verbose_name='Опис')
    content = models.TextField(verbose_name="Текст новини")
    short_description = models.TextField(max_length=200, verbose_name='Скорочений текст')
    time_to_read = models.CharField(max_length=5, default='10', verbose_name="Час прочитання")
    video = models.URLField(verbose_name='Посилання на YouTube:', blank=True, null=True, default=' ')
    main_image = models.ImageField(upload_to='media_storage/news_images', blank=False,
                                   verbose_name="Фото 1 (обов'язково)")
    optional_image_1 = models.ImageField(upload_to='media_storage/news_images', blank=True, verbose_name="Фото 2")
    optional_image_2 = models.ImageField(upload_to='media_storage/news_images', blank=True, verbose_name="Фото 3")
    optional_image_3 = models.ImageField(upload_to='media_storage/news_images', blank=True, verbose_name="Фото 4")
    category = models.CharField(max_length=25, choices=Category.choices, default='', verbose_name="Категорія новини")
    language = models.CharField(max_length=30, choices=ChooseLanguage.choices, default=ChooseLanguage.UKRAINIAN,
                                verbose_name='Мова сайту')
    created_at = models.DateTimeField(default=timezone.now, verbose_name='Дата створення:')
    slug = models.SlugField(unique=True, blank=True, verbose_name="Slug сторінки")

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(unidecode(self.title))
            self.slug = f'{base_slug}-{self.language}'
            while News.objects.filter(slug=self.slug).exists():
                self.slug = f'{base_slug}-{self.language}-{self.pk}'
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('news_detail', kwargs={'language': self.language, 'slug': self.slug})

    def __str__(self):
        return self.title

    def delete(self, *args, **kwargs):
        if self.main_image:
            self.main_image.delete()
        if self.optional_image_1:
            self.optional_image_1.delete()
        if self.optional_image_2:
            self.optional_image_2.delete()
        if self.optional_image_3:
            self.optional_image_3.delete()
        super().delete(*args, **kwargs)

    class Meta:
        verbose_name = 'Новина'
        verbose_name_plural = 'Новини'
        
