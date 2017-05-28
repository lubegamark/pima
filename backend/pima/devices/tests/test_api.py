from django.test import TestCase, RequestFactory
# Using the standard RequestFactory API to create a form POST request
from devices.models import Device
from django.test import Client
from rest_framework.renderers import JSONRenderer

from backend.pima.devices.serializers import DeviceSerializer


class TestDevices(TestCase):
    def setUp(self):
        Device.objects.create(name="dev1", latitude="0.236",
                              longitude="0.0036", slug='dev1')
        Device.objects.create(name="coke", latitude="0.136",
                              longitude="5.0036", slug='coke')
        Device.objects.create(name="fish", latitude="10.136",
                              longitude="54.006", slug='fish')
        self.factory = RequestFactory()

    def test_get_device_list(self):
        client = Client()
        response = client.get('/devices/')
        devices = DeviceSerializer(Device.objects.all(), many=True).data
        devices_json = JSONRenderer().render(devices)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, devices_json)

    def test_get_single_device(self):
        client = Client()
        response = client.get('/devices/dev1/')
        device = DeviceSerializer(Device.objects.get(slug='dev1')).data
        device_json = JSONRenderer().render(device)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, device_json)

    def test_get_all_readings_from_device(self):
        pass

    def test_update_device(self):
        pass

    def test_add_new_device(self):
        pass