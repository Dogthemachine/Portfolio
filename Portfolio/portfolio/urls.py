from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from gallery import views

urlpatterns = [
    path('', views.MainpageView.as_view(), name='main'),
    path('video/', views.VideoView.as_view(), name='video'),
    path('photo/', views.PhotoView.as_view(), name='photo'),
    path('about/', views.AboutView.as_view(), name='about'),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

