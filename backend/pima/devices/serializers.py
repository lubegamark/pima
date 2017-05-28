from rest_framework import serializers

from devices.models import Device, Reading


class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = ('id', 'name', 'latitude', 'longitude', 'slug')
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class ReadingSerializer(serializers.ModelSerializer):
    """
    A list of all readings recorded on a device
    """
    timeStamp = serializers.DateTimeField(source='_created_at')

    class Meta:
        model = Reading
        fields = ('id', 'value', 'timeStamp')
