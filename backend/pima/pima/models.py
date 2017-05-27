from django.db import models


class BaseModel(models.Model):
    """
    Base Model from which all others inherit
    """
    _created_at = models.DateTimeField(auto_now_add=True)
    _edited_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Device(BaseModel):
    """
    Any Device that takes readings
    """
    name = models.CharField(max_length=255)
    latitude = models.DecimalField(max_digits=20, decimal_places=10)
    longitude = models.DecimalField(max_digits=20, decimal_places=10)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

    @property
    def location(self):
        return self.latitude, self.longitude


class Reading(BaseModel):
    """
    Any reading taken by a device
    value is intentionally left as string to allow arbitrary types of values
    """
    value = models.CharField(max_length=255)
    device = models.ForeignKey(Device, related_name='readings')
