# Generated by Django 4.1.1 on 2022-10-11 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='photos',
            name='name',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='videos',
            name='name',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
