import {createEpicMiddleware} from 'redux-observable';
import {ajax} from 'rxjs/observable/dom/ajax';
import socketClient from 'socket.io-client';
import rootEpic from './root';

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {getJSON: ajax.getJSON, getSocket: socketClient},
});

export default epicMiddleware;
