from django.urls import path
from ContactApp import views

from django.conf.urls.static import static
from django.conf import settings

#do url pattern of djangoapi
urlpatterns=[
    path("user/",views.userApi),
    path("user/<int:id>/", views.userApi), #accept value as id into view function
    
    path("contact/",views.contactApi),
    path("contact/<int:id>/", views.contactApi),
    #path("user/([0-9]+)$",views.userApi)
    
    path("SaveFile", views.SaveFile) #go for SaveFile function in views
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #use static for file media
