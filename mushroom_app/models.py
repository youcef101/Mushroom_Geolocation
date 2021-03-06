from django.db import models
class Venue(models.Model):
    name = models.CharField(max_length=255)
    latitude = models.DecimalField(max_digits=20, decimal_places=15, null=True, blank=True)
    longitude = models.DecimalField(max_digits=20, decimal_places=15, null=True, blank=True)
    
    def __str__(self):
        return self.name