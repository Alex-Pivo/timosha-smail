# Generated by Django 5.0.2 on 2024-11-06 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0005_review_created_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='created_at',
        ),
        migrations.AlterField(
            model_name='review',
            name='message',
            field=models.CharField(max_length=150, verbose_name='Відгук'),
        ),
    ]
