from django import forms
from .models import SendEmailToAllSubscribedUser

class SendEmailToAllSubscribedUserForm(forms.ModelForm):
    class Meta:
        verbose_name = 'Відправити розсилку для всіх користувачів'
        verbose_name_plural = 'Відправити розсилку для всіх користувачів'
        model = SendEmailToAllSubscribedUser
        help_texts = {'subject': 'Введіть тему розсилки','message':'Введіть повідомлення'}
        fields = '__all__'
