import unittest 
import websocket
from websocket._url import get_proxy_info, parse_url
from client.socket_client import SocketClient
TRACEABLE = False
class MockSock(object):
	def __init__(self):
		self.data = []
		self.sent_data = []

	def add_data_packet(self, data):
		self.data.append(data)

	def recv_data(self, buffer_size):
		if self.data:
			error = self.data.pop(0)
			if isinstance(error, Exception):
				raise error
			if len(error) > buffer_size:
				self.data.insert(0, error[buffer_size])
			return error[:buffer_size]
	def send_data(self, data):
		self.send_data.append(data)
		return len(data)

	def close(self):
		pass

class TestSocketClient(unittest.TestCase):

	def setUp(self):
		websocket.enableTrace(TRACEABLE)

	def tearDown(self):
		pass

	def testParseUrl(self):
	    p = parse_url("ws://www.example.com/r")
	    self.assertEqual(p[0], "www.example.com")
	    self.assertEqual(p[1], 80)
	    self.assertEqual(p[2], "/r")
	    self.assertEqual(p[3], False)

	def testClose(self):
	    sock = websocket.WebSocket()
	    sock.sock = socket_client.SocketClient()
	    sock.connected = True
	    sock.close()
	    self.assertEqual(sock.connected, False)


if __name__ == '__main__':
	unittest.main()
