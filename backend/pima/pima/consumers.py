"""
Adapted from
https://github.com/andrewgodwin/channels-examples/tree/master/liveblog
"""
import json

from channels import Group

from .models import Device, Reading


def connect_device(message, slug):
    """
    When the user opens a WebSocket to a liveblog stream, adds them to the
    group for that stream so they receive new post notifications.
    """
    try:
        device = Device.objects.get(slug=slug)
    except Device.DoesNotExist:
        message.reply_channel.send({
            "text": json.dumps({"error": "bad_slug"}),
            "close": True,
        })
        return
    message.reply_channel.send({"accept": True})
    Group(device.group_name).add(message.reply_channel)


def disconnect_device(message, slug):
    """
    Removes the user from the group when they disconnect.
    """
    try:
        device = Device.objects.get(slug=slug)
    except Device.DoesNotExist:
        return
    Group(device.group_name).discard(message.reply_channel)


def save_reading(message, slug):
    """
    Saves new reading to the database.
    """
    post = json.loads(message['text'])['post']
    device = Device.objects.get(slug=slug)
    Reading.objects.create(device=device, value=post)
