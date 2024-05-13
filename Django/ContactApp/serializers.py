from rest_framework import serializers
from ContactApp.models import Users, Contacts

#convert model or quesry into python data type(what my idea not sure)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('UserId',
                  'UserName')
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = ('ContactId',
                  'ContactName',
                  'PhoneNumber',
                  'User',
                  'Email',
                  'PhotoFileName')