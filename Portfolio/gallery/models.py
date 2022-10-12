from django.db import models
from django_resized import ResizedImageField
from django.core.validators import FileExtensionValidator


class Photos(models.Model):
    name = models.CharField(max_length=200, blank=True)
    photo = ResizedImageField(size=[2500, 2500], upload_to="photos/%Y/%m/%d")

    def __str__(self):
        return u"(%s)" % (self.name)


class Videos(models.Model):
    name = models.CharField(max_length=200, blank=True)
    video = models.FileField(upload_to='videos_uploaded',null=True,
                             validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    video_webm = models.FileField(upload_to='videos_uploaded',null=True,
                             validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    poster = ResizedImageField(size=[2500, 2500], upload_to="photos/%Y/%m/%d", blank=True)
    duration = models.CharField(max_length=50, blank=True)


    def __str__(self):
        return u"(%s)" % (self.name)