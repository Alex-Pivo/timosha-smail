# Generated by Django 5.0.2 on 2024-05-02 09:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('email_data', '0003_rename_sendemailtoallsubscribedusers_sendemailtoallsubscribeduser_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sendemailtoallsubscribeduser',
            name='language',
            field=models.CharField(choices=[('uk', 'Українська'), ('en', 'English'), ('it', 'Italiano'), ('ru', 'Русский')], default='uk', max_length=30, verbose_name='Мова розсилки'),
        ),
        migrations.AlterField(
            model_name='sendemailtoallsubscribeduser',
            name='message',
            field=models.TextField(verbose_name='Повідомлення'),
        ),
        migrations.AlterField(
            model_name='sendemailtoallsubscribeduser',
            name='subject',
            field=models.CharField(max_length=100, verbose_name='Тема'),
        ),
        migrations.AlterField(
            model_name='subscribedusersemail',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='Електронна пошта'),
        ),
        migrations.AlterField(
            model_name='subscribedusersemail',
            name='language',
            field=models.CharField(choices=[('uk', 'Українська'), ('en', 'English'), ('it', 'Italiano'), ('ru', 'Русский')], default='uk', max_length=30, verbose_name='Обрана мова розсилки'),
        ),
    ]