from django.contrib import admin
from .models import Report,OurArticle





@admin.register(Report)
class ReportsAndOurArticleAdmin(admin.ModelAdmin):
    list_display = ['year','language']


@admin.register(OurArticle)
class OurArticleAdmin(admin.ModelAdmin):
    list_display = ['article_title','language']

#
# #
# @admin.register(ArticleOnSite)
# class ArticleOnSiteAdmin(admin.ModelAdmin):
#     list_display = ['title','language']






