# Generated by Django 5.0.2 on 2024-05-02 09:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact_with_us', '0003_alter_usersrequest_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usersrequest',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Створено'),
        ),
        migrations.AlterField(
            model_name='usersrequest',
            name='message',
            field=models.TextField(editable=False, verbose_name='Повідомлення'),
        ),
        migrations.AlterField(
            model_name='usersrequest',
            name='phone',
            field=models.CharField(editable=False, max_length=13, verbose_name='Номер телефону'),
        ),
        migrations.AlterField(
            model_name='usersrequest',
            name='selected_button',
            field=models.TextField(default=' ', editable=False, verbose_name='Обрана кнопка'),
        ),
        migrations.AlterField(
            model_name='usersrequest',
            name='username',
            field=models.CharField(editable=False, max_length=255, verbose_name="Ім'я"),
        ),
    ]