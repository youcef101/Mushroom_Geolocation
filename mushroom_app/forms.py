from django.forms import ModelForm
from django.conf import settings
from .models import Venue

class VenueForm(ModelForm):
  class Meta:
    model=Venue
    fields=['name','latitude','longitude']
  