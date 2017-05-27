import {Observable} from 'rxjs/Observable';
import socketClient from 'socket.io-client';
import 'rxjs';
import {START_LISTENING, READING_RECEIVED, STOP_LISTENING} from '../constants';

const socket = socketClient('http://192.168.10.104:3000');

const readings = (action$) => action$.ofType(START_LISTENING)
  .mergeMap(() => new Observable(observer => {
    socket.emit('userJoined', null);
    socket.on('message', (message) => {
      observer.next(message);
    });
  })).takeUntil(
  action$.ofType(STOP_LISTENING)
    .filter(() => socket.close())
).map(tick => ({type: READING_RECEIVED, payload: {message: tick}}));

export default readings;
