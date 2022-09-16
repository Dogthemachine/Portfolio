from django.contrib import admin
from django.urls import pat
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.MainpageView.as_view(), name='showcase'),
    path('video/', views.VideoView.as_view(), name='about'),
    path('photo/', views.PhotoView.as_view(), name='about'),
]

