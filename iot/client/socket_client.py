import websocket
import thread
import json
import serial


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
        ser = serial.Serial('/dev/ttyACM0', 9600)

        def run(*args):
            while True:
                read_serial = ser.readline()
                print read_serial
                if(len(read_serial) <= 3):
                    data = json.dumps({"post": (int(read_serial)/10000.0)*10})
                    ws.send(data)
        thread.start_new_thread(run, ())


if __name__ == "__main__":
    sock = SocketClient()
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp(
        "ws://207.154.204.214:8000/devices/test-device-1/readings/stream/",
        on_message=sock.on_message,
        on_error=sock.on_error,
        on_close=sock.on_close)
    ws.on_open = sock.on_open
    ws.run_forever()
