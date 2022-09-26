from django.contrib import admin

from gallery.models import Videos as Video

from gallery.models import Photos as Photo

from django.contrib.auth.models import Group

class PhotoAdmin(admin.ModelAdmin):
    list_display = ('id', 'photo')

class VideoAdmin(admin.ModelAdmin):
    list_display = ('id', 'video')

admin.site.register(Photo, PhotoAdmin)

admin.site.register(Video, VideoAdmin)

admin.site.unregister(Group)

