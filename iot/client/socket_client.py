import websocket
import thread
import time
import json


class SocketClient():

    def __init_(self):
        pass

    def on_message(self, ws, message):
        print message

    def on_error(self, ws, error):
        print error

    def on_close(self, ws):
        print "### closed ###"

    def on_open(self, ws):
        def run(*args):
            for i in range(3):
                time.sleep(1)
                content = raw_input("Please enter something: ")
                data = json.dumps({"post": content})
                print data
                websocket.send(data)
            time.sleep(1)
            print "thread terminating..."
        thread.start_new_thread(run, ())


if __name__ == "__main__":
    sock = SocketClient()
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("ws://127.0.0.1:8000/device/dev1/stream/",
                                on_message=sock.on_message,
                                on_error=sock.on_error,
                                on_close=sock.on_close)
    ws.on_open = sock.on_open
    ws.run_forever()
