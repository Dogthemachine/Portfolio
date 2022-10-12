from django.contrib import admin

from gallery.models import Videos as Video

from gallery.models import Photos as Photo

from django.contrib.auth.models import Group

class PhotoAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'photo')

class VideoAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'video', 'video_webm', 'poster')

admin.site.register(Photo, PhotoAdmin)

admin.site.register(Video, VideoAdmin)

admin.site.unregister(Group)

