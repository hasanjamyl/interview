from django.db import models

# Create your models here.

class Panels(models.Model):
    PanelId = models.AutoField(primary_key=True)
    PanelName = models.CharField(max_length=100)

class Members(models.Model):
    MemberId = models.AutoField(primary_key=True)
    MemberName = models.CharField(max_length=100)
    Panel = models.CharField(max_length=100)
    DateOfJoining = models.DateField()
    PhotoFileName = models.CharField(max_length=100)