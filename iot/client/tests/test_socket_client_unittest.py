import unittest 
import websocket
from websocket._url import get_proxy_info, parse_url
from socket_client import SocketClient

class TestSocketClient(unittest.TestCase):

	def setUp(self):
		self.url = "ws://www.example.com"

	def tearDown(self):
		pass

	def testParseUrl(self):
	    p = parse_url("ws://www.example.com/r")
	    self.assertEqual(p[0], "www.example.com")
	    self.assertEqual(p[1], 80)
	    self.assertEqual(p[2], "/r")
	    self.assertEqual(p[3], False)

	def testOnClose(self):
	    sock = SocketClient()
	    self.assertEqual(sock.on_close(self.url), None)

	def testOnMessage(self):
		sock = SocketClient()
		self.assertEqual(sock.on_message(self.url, 'test'), None)

	def testOnError(self):
		sock = SocketClient()
		self.assertEqual(sock.on_message(self.url, 'error'), None)

	def testOnOpen(self):
		sock = SocketClient()
		self.assertEqual(sock.on_open(self.url), None)


if __name__ == '__main__':
	unittest.main()
