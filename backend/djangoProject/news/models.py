from django.db import models
from django.utils.text import slugify
from django.utils import timezone

class ChooseLanguage(models.TextChoices):
    ukrainian = 'uk', 'Українська'
    english = 'en', 'English'
    italian = 'it', 'Italiano'
    russian = 'ru', 'Русский'



class Category(models.TextChoices):
    # ALL_NEWS = 'all_news',"Всі статті"
    CHILDS_HISTORY = 'childs_history', 'Історії діток'
    FOND_ACHIVMENTS = 'fond_achievments', 'Досягнення фонду'
    IMPORTANT = 'important', 'Важливе'
    YOUR_HELP = 'your_help', 'Ваша допомога'
    LIFE_OF_FOND = 'life_of_fond', 'Життя фонду'
    INTERVIEW = 'interview', 'Інтерв’ю'





class News(models.Model):
    title = models.CharField(max_length=100,verbose_name='Заголовок')
    description = models.TextField(max_length=400,verbose_name='Опис')
    content = models.TextField(verbose_name="Текст новини")
    short_description = models.TextField(max_length=200,verbose_name='Скорочений текст ')

    time_to_read = models.CharField(max_length=5, default='10',verbose_name="Час прочитання")

    main_image = models.ImageField(upload_to='media_storage/news_images', blank=False,verbose_name="Фото 1 (обов'язково)")
    optional_image_1 = models.ImageField(upload_to='media_storage/news_images', blank=True,verbose_name="Фото 2")
    optional_image_2 = models.ImageField(upload_to='media_storage/news_images', blank=True,verbose_name="Фото 3")
    optional_image_3 = models.ImageField(upload_to='media_storage/news_images', blank=True,verbose_name="Фото 4")

    category = models.CharField(max_length=25, choices=Category.choices, default=Category.IMPORTANT,verbose_name="Категорія новини")
    slug = models.SlugField(unique=True, default='',verbose_name="Slug сторінки")
    language = models.CharField(max_length=30, choices=ChooseLanguage.choices, default=ChooseLanguage.ukrainian)
    created_at = models.DateTimeField(default=timezone.now)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новина'
        verbose_name_plural = 'Новини'