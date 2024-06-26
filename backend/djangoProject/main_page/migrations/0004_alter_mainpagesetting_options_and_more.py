# Generated by Django 5.0.2 on 2024-05-10 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_page', '0003_rename_mainpagesettings_mainpagesetting'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='mainpagesetting',
            options={'verbose_name': 'Параметри головної сторінки', 'verbose_name_plural': 'Налаштування фотографій діточок на головній сторінці'},
        ),
        migrations.AlterField(
            model_name='mainpagesetting',
            name='child_age',
            field=models.CharField(default='', max_length=2, verbose_name='Вік дитини'),
        ),
        migrations.AlterField(
            model_name='mainpagesetting',
            name='child_name',
            field=models.TextField(max_length=20, verbose_name="Ім'я дитини"),
        ),
        migrations.AlterField(
            model_name='mainpagesetting',
            name='image1',
            field=models.ImageField(default=None, upload_to='media_storage/main_page_images', verbose_name='Фото 1'),
        ),
        migrations.AlterField(
            model_name='mainpagesetting',
            name='image1_url_new',
            field=models.URLField(verbose_name="Посилання статті на 'Фото 1 '"),
        ),
        migrations.AlterField(
            model_name='mainpagesetting',
            name='image2',
            field=models.ImageField(default=None, upload_to='media_storage/main_page_images', verbose_name='Фото 2'),
        ),
        migrations.AlterField(
            model_name='mainpagesetting',
            name='image3',
            field=models.ImageField(default=None, upload_to='media_storage/main_page_images', verbose_name='Фото 3'),
        ),
        migrations.AlterField(
            model_name='mainpagesetting',
            name='image4',
            field=models.ImageField(default=None, upload_to='media_storage/main_page_images', verbose_name='Фото 4'),
        ),
        migrations.AlterField(
            model_name='mainpagesetting',
            name='image5',
            field=models.ImageField(default=None, upload_to='media_storage/main_page_images', verbose_name='Фото 5'),
        ),
        migrations.AlterField(
            model_name='mainpagesetting',
            name='image6',
            field=models.ImageField(default=None, upload_to='media_storage/main_page_images', verbose_name='Фото 6'),
        ),
        migrations.AlterField(
            model_name='mainpagesetting',
            name='language',
            field=models.CharField(choices=[('uk', 'Українська'), ('en', 'English'), ('it', 'Italiano'), ('ru', 'Русский')], default='uk', max_length=30, verbose_name='Мова сайту'),
        ),
    ]
