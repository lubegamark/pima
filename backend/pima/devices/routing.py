from channels.routing import route
from .consumers import connect_device, disconnect_device, save_reading


channel_routing = [
    # Called when incoming WebSockets connect
    route("websocket.connect", connect_device,
          path=r'^/devices/(?P<slug>[^/]+)/readings/stream/$'),
    # Called when the client closes the socket
    route("websocket.disconnect", disconnect_device,
          path=r'^/devices/(?P<slug>[^/]+)/readings/stream/$'),
    # Called when the client sends message on the WebSocket
    route("websocket.receive", save_reading,
          path=r'^/devices/(?P<slug>[^/]+)/readings/stream/$'),
]
