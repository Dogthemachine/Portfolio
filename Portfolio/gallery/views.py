from django.shortcuts import render, redirect, get_object_or_404
from django.views import View
from gallery.models import Photos, Videos


class MainpageView(View):
    def get(self, request):
        return render(request, 'main.html')


class VideoView(View):
    def get(self, request):
        try:
            allvideos = Videos.objects.all()
            return render(request, 'video.html', {'content': allvideos})
        except:
            return render(request, 'video.html')


class PhotoView(View):
    def get(self, request):
        try:
            allphotos = Photos.objects.all()
            return render(request, 'photo.html', {'content': allphotos})
        except:
            return render(request, 'photo.html')