import {createEpicMiddleware} from 'redux-observable';
import {ajax} from 'rxjs/observable/dom/ajax';
import socketClient from 'socket.io-client';
import rootEpic from './root';

const socket = socketClient('http://192.168.10.104:3000');
const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {getJSON: ajax.getJSON, getSocket: socket},
});

export default epicMiddleware;
