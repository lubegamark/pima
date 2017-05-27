import json

from channels import Group
from django.db import models
from pima.models import BaseModel


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

    @property
    def group_name(self):
        """
        Returns the Channels Group name to use for sending notifications.
        """
        return "device-%s" % self.id


class Reading(BaseModel):
    """
    Any reading taken by a device
    value is intentionally left as string to allow arbitrary types of values
    """
    value = models.CharField(max_length=255)
    device = models.ForeignKey(Device, related_name='readings')

    def send_notification(self):
        notification = {
            "id": self.id,
            "value": self.value,
            "created": self._created_at.strftime("%a %d %b %Y %H:%M"),
        }
        Group(self.device.group_name).send({
            # WebSocket text frame, with JSON content
            "text": json.dumps(notification),
        })

    def save(self, *args, **kwargs):
        result = super(Reading, self).save(*args, **kwargs)
        self.send_notification()
        return result
