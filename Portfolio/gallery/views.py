from django.shortcuts import render, redirect, get_object_or_404
from django.views import View
from gallery.models import Photos, Videos


class MainpageView(View):
    def get(self, request):
        return render(request, 'main.html')


class PhotoView(View):
    def get(self, request):
        allphotos = Photos.objects.all()
        return render(request, 'photo.html', {'allphotos': allphotos})


class VideoView(View):
    def get(self, request):
        try:
            allvideos = Videos.objects.all()
            return render(request, 'video.html', {'allvideos': allvideos})
        except:
            return render(request, 'video.html')


class AboutView(View):
    def get(self, request):
        return render(request, 'about.html')