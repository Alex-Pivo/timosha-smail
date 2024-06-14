from django.db import models

class UsersRequest(models.Model):
    username = models.CharField(max_length=255,null=False,editable=False,verbose_name="Ім'я")
    phone = models.CharField(max_length =13,null=False,editable=False,verbose_name="Номер телефону")
    selected_button = models.TextField(null=False,default=' ',editable=False,verbose_name="Обрана кнопка")
    message = models.TextField(null=False,editable=False,verbose_name="Повідомлення")
    created_at = models.DateTimeField(auto_now_add=True,editable=False,verbose_name="Створено")

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "Повідомлення користувача"
        verbose_name_plural = "Повідомлення користувачів"