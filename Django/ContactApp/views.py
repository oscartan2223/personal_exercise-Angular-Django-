from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from ContactApp.models import Users, Contacts
from ContactApp.serializers import UserSerializer, ContactSerializer

from django.core.files.storage import default_storage

@csrf_exempt   #is a decorator in Django which makes a view function exempt from the CSRF protection mechanism. It is used to disable CSRF protection for specific views
def userApi(request,id=0):
    if request.method=='GET':#read
        users = Users.objects.all()#retreive Users from database
        users_serializer = UserSerializer(users, many=True) #many equal True mean contain multiple items
        return JsonResponse(users_serializer.data, safe=False)  #Json used for trasmmiting data in web application || safe=False allow JSON receive any Python Data Type while True only accept Python Data-Type{Dictionaries}
    elif request.method=='POST':#insert
        user_data = JSONParser().parse(request)  #assign a variable name to the receive value
        user_serializer = UserSerializer(data=user_data)  #passing the user_data as variable "data"
        if user_serializer.is_valid():#check is it valid
            user_serializer.save()#save it
            return JsonResponse("Added Successfully!!", safe=False)#return JSON response success
        return JsonResponse("Failed to Add.", safe=False)#return JSON response failed
    elif request.method=='PUT':#update
        user_data = JSONParser().parse(request)
        user = Users.objects.get(UserId=user_data['UserId'])#get Users object and get UserId in database
        user_serializer = UserSerializer(user, data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)
    elif request.method=='DELETE':#drop
        user = Users.objects.get(UserId=id)#retrieve Users based on id parameter
        user.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)
    
    
@csrf_exempt
def contactApi(request,id=0):
    if request.method=='GET':#read
        contacts = Contacts.objects.all()
        contacts_serializer = ContactSerializer(contacts, many=True)
        return JsonResponse(contacts_serializer.data, safe=False)
    elif request.method=='POST':#insert
        contact_data = JSONParser().parse(request)
        contact_serializer = ContactSerializer(data=contact_data)
        if contact_serializer.is_valid():
            contact_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to Add.", safe=False)
    elif request.method=='PUT':#update
        contact_data = JSONParser().parse(request)
        contact = Contacts.objects.get(ContactId=contact_data['ContactId'])
        contact_serializer = ContactSerializer(contact, data=contact_data)
        if contact_serializer.is_valid():
            contact_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)
    elif request.method=='DELETE':#drop
        contact = Contacts.objects.get(ContactId=id)
        contact.delete()
        return JsonResponse("Deleted Successfully!!", safe=False)
    
@csrf_exempt
def SaveFile(request):
    #if request.method=='PUT':
        file = request.FILES['uploadedFile']
        file_name = default_storage.save(file.name, file)
        
        return JsonResponse(file_name, safe=False)
        