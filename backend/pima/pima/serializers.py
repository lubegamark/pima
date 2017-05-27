from rest_framework import serializers

from .models import Device, Reading


class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = ('id', 'name', 'location',)
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class ReadingSerializer(serializers.ModelSerializer):
    """
    A list of all readings recorded on a device
    """
    class Meta:
        model = Reading
        fields = ('id', 'value',)
