from rest_framework import generics

from devices.models import Device, Reading
from .serializers import DeviceSerializer, ReadingSerializer


class DeviceList(generics.ListCreateAPIView):
    """
    A list of all devices 
    New devices are registered here too
    """
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer


class DeviceDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Details about a specific device
    """
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
    lookup_field = 'slug'


class DeviceReadings(generics.ListAPIView):
    """
    A list of all readings recorded on a device
    """
    serializer_class = ReadingSerializer

    def get_queryset(self):
        device = Device.objects.get(slug=self.kwargs.get('slug'))
        return Reading.objects.filter(device=device)
