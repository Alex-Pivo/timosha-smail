from rest_framework import serializers
from . import models

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.News
        fields = ['title', 'short_description', 'description', 'content', 'time_to_read', 'main_image', 'optional_image_1', 'optional_image_2', 'optional_image_3', 'category', 'slug', 'language', 'created_at']
