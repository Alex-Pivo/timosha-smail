# Generated by Django 5.0.2 on 2024-05-01 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=100)),
                ('image', models.ImageField(blank=True, default=None, null=True, upload_to='media_storage/reviews_images')),
                ('language', models.CharField(choices=[('uk', 'Українська'), ('en', 'English'), ('it', 'Italiano'), ('ru', 'Русский')], default='uk', max_length=30)),
            ],
        ),
    ]
