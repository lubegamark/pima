import {Observable} from 'rxjs/Observable';
import SocketIOClient from 'socket.io-client';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import 'rxjs';
const message = (state = 9, action) => {
  switch (action.type) {
    case 'MESSAGE':
      return action.payload.message
  }

  return state;
}

const socket = SocketIOClient('http://192.168.10.104:3000');

const stockTickerEpic = (action$, store) =>
  action$.ofType('START')
    .mergeMap(action => {
      return new Observable(observer => {
        socket.emit('userJoined', null);
        socket.on('message', (message) =>
        {
          observer.next(message)
        });
      })
    }).takeUntil(
    action$.ofType('STOP')
      .filter(closeAction => closeAction === action.payload.message)
  ).map(tick => ({type: 'MESSAGE', payload:{message:tick}}));


const epicMiddleware = createEpicMiddleware(stockTickerEpic);

const reducers=combineReducers({
  message,
});
export const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware)
);

