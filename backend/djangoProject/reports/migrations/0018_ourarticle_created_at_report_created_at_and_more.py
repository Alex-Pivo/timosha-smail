# Generated by Django 5.0.2 on 2024-09-04 10:59

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0017_alter_ourarticle_options_alter_report_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='ourarticle',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата створення:'),
        ),
        migrations.AddField(
            model_name='report',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата створення:'),
        ),
        migrations.AlterField(
            model_name='report',
            name='first_description',
            field=models.TextField(default='', max_length=255, verbose_name="Пункт 1 (обов'язковий) синій"),
        ),
        migrations.AlterField(
            model_name='report',
            name='fourth_description',
            field=models.TextField(blank=True, default='', max_length=255, verbose_name='Пункт 4 рожевий'),
        ),
        migrations.AlterField(
            model_name='report',
            name='second_description',
            field=models.TextField(blank=True, default='', max_length=255, verbose_name='Пункт 2 зелений'),
        ),
        migrations.AlterField(
            model_name='report',
            name='third_description',
            field=models.TextField(blank=True, default='', max_length=255, verbose_name='Пункт 3 помаранчевий'),
        ),
    ]
