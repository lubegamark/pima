import json

from django.test import TestCase, RequestFactory
# Using the standard RequestFactory API to create a form POST request
from devices.models import Device, Reading
from django.test import Client
from rest_framework.renderers import JSONRenderer

from devices.serializers import DeviceSerializer, ReadingSerializer


class TestDevices(TestCase):
    def setUp(self):
        dev1 = Device.objects.create(name="dev1", latitude="0.236",
                                     longitude="0.0036", slug='dev1')
        coke = Device.objects.create(name="coke", latitude="0.136",
                                     longitude="5.0036", slug='coke')
        fish = Device.objects.create(name="fish", latitude="10.136",
                                     longitude="54.006", slug='fish')
        Reading.objects.create(device=fish, value="44")
        Reading.objects.create(device=fish, value="12")
        Reading.objects.create(device=coke, value="4")
        Reading.objects.create(device=fish, value="4")
        Reading.objects.create(device=dev1, value="90")

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
        client = Client()
        response = client.get('/devices/fish/readings/')
        device = Device.objects.get(slug='fish')
        readings = ReadingSerializer(Reading.objects.filter(
            device=device), many=True).data
        devices_json = JSONRenderer().render(readings)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, devices_json)

    # def test_update_device(self):
    #     client = Client()
    #     get_response = client.get('/devices/coke/')
    #     device_id = get_response.data.get('id')
    #     try:
    #         response = client.put('/devices/coke/',
    #                           json.dumps({"name": "goat"}),
    #                           content_type='application/json',)
    #     except Exception as e:
    #         print e
    #     device = Device.objects.get(id=device_id)
    #     self.assertEqual(device.name, "goat")
    #     self.assertEqual(response.status_code, 200)

    def test_add_new_device(self):
        client = Client()
        response = client.post('/devices/',
                               json.dumps(
                                   {"name": "bottle", "longitude": "0.125",
                                    "latitude": "45.7", "slug": "bottle"}),
                               content_type='application/json', )
        self.assertEqual(response.status_code, 201)
