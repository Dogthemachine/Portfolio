from django.db import models
from django_resized import ResizedImageField
from django.core.validators import FileExtensionValidator


class Photos(models.Model):
    photo = ResizedImageField(size=[2500, 2500], upload_to="photos/%Y/%m/%d")

    def __str__(self):
        return u"(%s)" % (self.id)


class Videos(models.Model):
    video = models.FileField(upload_to='videos_uploaded',null=True,
                             validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])

    def __str__(self):
        return u"(%s)" % (self.id)