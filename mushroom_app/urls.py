from django.urls import path
from . import views

urlpatterns = [
    
    path('',views.map,name='map'),
    path('addlocation/',views.add_location,name='location'),
]