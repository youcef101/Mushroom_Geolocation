from django.shortcuts import render,redirect
from .models import Venue
from .forms import VenueForm
from django.http import HttpResponseRedirect

# Create your views here.
def map(request):
    # TODO: move this token to Django settings from an environment variable
    # found in the Mapbox account settings and getting started instructions
    # see https://www.mapbox.com/account/ under the "Access tokens" section
    mapbox_access_token = 'pk.my_mapbox_access_token'
   
    context={'mapbox_access_token': mapbox_access_token }
    return render(request,'app/map.html',context)

def add_location(request):
    url=request.META.get('HTTP_REFERER')
    if request.method=='POST':
        form=VenueForm(request.POST)
        if form.is_valid():
           name=form.cleaned_data.get('name')
           longitude=form.cleaned_data.get('longitude')
           latitude=form.cleaned_data.get('latidude')
           form.save()
           return redirect('/')
    else:
        form=VenueForm()
    
    return HttpResponseRedirect(url)