import smtplib
from django.core.mail import EmailMessage
from django.contrib import admin
from .models import SendEmailToAllSubscribedUser,SubscribedUsersEmail
from .forms import SendEmailToAllSubscribedUserForm



@admin.register(SendEmailToAllSubscribedUser)
class SendEmailToAllSubscribedUsersAdmin(admin.ModelAdmin):
    form = SendEmailToAllSubscribedUserForm
    list_display = ['subject', 'language']
    actions = ['send_email_to_users']

    def send_email_to_users(self, request, queryset):
        for email_data in queryset:
            subject = email_data.subject
            message = email_data.message
            language = email_data.language
            from_email = 'timoshas.smile@gmail.com'

            bcc_emails = SubscribedUsersEmail.objects.filter(language=language).values_list('email', flat=True)

            if bcc_emails:
                try:
                    email = EmailMessage(subject, message, from_email, bcc=list(bcc_emails))
                    email.send()
                    self.message_user(request, f'The email "{subject}" has been sent to all subscribers with language "{language}".')
                except smtplib.SMTPException as e:
                    self.message_user(request, f'SMTPException: {e}', level='error')

    send_email_to_users.short_description = 'Відправити вибранну розсилку всім користувачам'

@admin.register(SubscribedUsersEmail)
class SubscribedUsersEmailsAdmin(admin.ModelAdmin):
    list_display = ['email','language']
    read_only_fields = ['email','language']
