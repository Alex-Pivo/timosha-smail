from django.urls import path
from . import views

urlpatterns = [
    path('<str:language>/', views.GetNewsList.as_view(), name='news_list'),
    path('<str:language>/category/<str:category>/', views.SortNewsByCategory.as_view(), name='sort_by_category'),
    path('<str:language>/<slug:slug>/', views.GetNewsDetail.as_view(), name='news_detail'),
    path('slug/<str:slug>/',views.GetNewOnAnotherLanguage.as_view(),name='new_by_title'),

]
