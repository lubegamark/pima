import {Observable} from 'rxjs/Observable';
import 'rxjs';
import {START_LISTENING, READING_RECEIVED, STOP_LISTENING} from '../constants';

let socket;
const readings = (action$, none, {getSocket}) => action$.ofType(START_LISTENING)
  .mergeMap(() => new Observable(observer => {
    socket = getSocket;
    socket.onopen = () => {
    };
    socket.onmessage = (message) => {
      observer.next(JSON.parse(message.data).value);
    };

    socket.onerror = (e) => {
      observer.error(e);
    };

    socket.onclose = (e) => {
      observer.complete(e);
    };
  })).takeUntil(
  action$.ofType(STOP_LISTENING)
    .filter(() => socket.close())
).map(reading => ({type: READING_RECEIVED, payload: {reading}}));

export default readings;
