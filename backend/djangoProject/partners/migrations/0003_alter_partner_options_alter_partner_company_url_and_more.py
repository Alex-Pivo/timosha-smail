# Generated by Django 5.0.2 on 2024-05-10 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('partners', '0002_rename_name_partner_partner_name'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='partner',
            options={'verbose_name': 'Партнер', 'verbose_name_plural': 'Партнери'},
        ),
        migrations.AlterField(
            model_name='partner',
            name='company_url',
            field=models.URLField(blank=True, default=None, null=True, verbose_name='Посилання на сайт/соц.мережу'),
        ),
        migrations.AlterField(
            model_name='partner',
            name='description',
            field=models.CharField(max_length=100, verbose_name='Короткий опис'),
        ),
        migrations.AlterField(
            model_name='partner',
            name='image',
            field=models.ImageField(default=None, upload_to='media_storage/partners_images', verbose_name='Лого партнера'),
        ),
        migrations.AlterField(
            model_name='partner',
            name='language',
            field=models.CharField(choices=[('uk', 'Українська'), ('en', 'English'), ('it', 'Italiano'), ('ru', 'Русский')], default='uk', max_length=30, verbose_name='Мова сайту'),
        ),
        migrations.AlterField(
            model_name='partner',
            name='partner_name',
            field=models.CharField(max_length=40, verbose_name="Ім'я партнера/Назва компанії"),
        ),
    ]