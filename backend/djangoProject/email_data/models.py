from django.db import models


class ChooseLanguage(models.TextChoices):
    ukrainian = 'uk', 'Українська'
    english = 'en', 'English'
    italian = 'it', 'Italiano'
    russian = 'ru', 'Русский'



class SubscribedUsersEmail(models.Model):
    email = models.EmailField(unique=False,verbose_name="Електронна пошта")
    language = models.CharField(max_length=30, choices=ChooseLanguage.choices, default=ChooseLanguage.ukrainian,verbose_name="Обрана мова розсилки")

    def __str__(self):
        return self.email
    class Meta:
        verbose_name = "Користувач"
        verbose_name_plural = "База підписаних користувачів на Email-розсилку"

class SendEmailToAllSubscribedUser(models.Model):
    subject = models.CharField(max_length=100,verbose_name="Тема")
    message = models.TextField(verbose_name="Повідомлення")
    language = models.CharField(max_length=30, choices=ChooseLanguage.choices, default=ChooseLanguage.ukrainian,verbose_name="Мова розсилки")

    def __str__(self):
        return self.subject

    class Meta:
        verbose_name = "Розсилка"
        verbose_name_plural = "Розсилки"
#