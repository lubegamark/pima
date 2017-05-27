from django.db import IntegrityError
from django.test import TestCase

from devices.models import Device


class TestDevice(TestCase):
    def setUp(self):
        Device.objects.create(name="dev1", latitude=0.236,
                              longitude=0.0036)

    def test_devices_are_created(self):
        dev1 = Device.objects.get(name="dev1")
        self.assertEqual(dev1.name, 'dev1')

    def test_location(self):
        dev1 = Device.objects.get(name="dev1")
        self.assertItemsEqual(dev1.location, (dev1.latitude, dev1.longitude))

    def test_group_name(self):
        dev1 = Device.objects.get(name="dev1")
        self.assertEqual(dev1.group_name, "device-1")

    def test_slug(self):
        Device.objects.create(name="boab", latitude=345.33, longitude=3.4556)
        device1 = Device.objects.get(name="boab")
        self.assertEqual(device1.slug, "boab")
        device2 = Device.objects.create(name="coca cola", latitude=5.33,
                                        longitude=034.4556)
        self.assertEqual(device2.slug, "coca-cola")

    def test_slug_unique(self):
        Device.objects.create(name="jungle-device", latitude=345.33,
                              longitude=3.4556)
        with self.assertRaises(IntegrityError):
            Device.objects.create(name="jungle-device", latitude=50.33,
                                  longitude=0.256)




