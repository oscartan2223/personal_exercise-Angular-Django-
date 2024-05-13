from django.db import models

#create the table in database with its entity
class Users(models.Model):
    UserId = models.AutoField(primary_key=True)
    UserName  = models.CharField(max_length=100)
    
class Contacts(models.Model):
    ContactId = models.AutoField(primary_key=True)
    ContactName = models.CharField(max_length=100)
    PhoneNumber = models.CharField(max_length=20)
    User = models.CharField(max_length=100)
    Email = models.EmailField(max_length=100)
    PhotoFileName = models.CharField(max_length=255)