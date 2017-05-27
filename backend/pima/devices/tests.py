from django.test import TestCase

from devices import Device


class TestDevice(TestCase):
    def setUp(self):
        Device.objects.create(name="dev1", latitude="0.236",
                              longitude="0.0036")

    def test_devices_are_created(self):
        """Animals that can speak are correctly identified"""
        dev1 = Device.objects.get(name="dev1")
        self.assertEqual(dev1.name, 'dev1')

    def test_location(self):
        dev1 = Device.objects.get(name="dev1")
        self.assertItemsEqual(dev1.location, (dev1.latitude, dev1.longitude))
