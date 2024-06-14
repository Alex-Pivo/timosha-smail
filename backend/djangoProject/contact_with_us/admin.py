from django.contrib import admin
from .models import UsersRequest
@admin.register(UsersRequest)
class UsersRequestAdmin(admin.ModelAdmin):
    list_display = ['username', 'selected_button','created_at']
    search_fields = ['username', 'created_at','phone_number']
    readonly_fields = ['username', 'phone','message','selected_button','created_at']
