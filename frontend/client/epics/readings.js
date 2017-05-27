import {Observable} from 'rxjs/Observable';
import 'rxjs';
import {START_LISTENING, READING_RECEIVED, STOP_LISTENING} from '../constants';



const readings = (action$, none, {getSocket}) => action$.ofType(START_LISTENING)
  .mergeMap(() => new Observable(observer => {
    getSocket.emit('userJoined', null);
    getSocket.on('message', (message) => {
      observer.next(message);
    });
  })).takeUntil(
  action$.ofType(STOP_LISTENING)
    .filter(() => getSocket.close())
).map(tick => ({type: READING_RECEIVED, payload: {message: tick}}));

export default readings;
