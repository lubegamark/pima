import {Observable} from 'rxjs/Observable';
import 'rxjs';
import {START_LISTENING, READING_RECEIVED, STOP_LISTENING} from '../constants';

let socket;
const readings = (action$, none, {getSocket}) => action$.ofType(START_LISTENING)
  .mergeMap(() => new Observable(observer => {
    socket = getSocket('http://192.168.1.226:3000');
    socket.emit('userJoined', null);
    socket.on('message', (message) => {
      observer.next(message);
    });
  })).takeUntil(
  action$.ofType(STOP_LISTENING)
    .filter(() => socket.close())
).map(reading => ({type: READING_RECEIVED, payload: {reading}}));

export default readings;
