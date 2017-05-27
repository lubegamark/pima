import {createEpicMiddleware} from 'redux-observable';
import {ajax} from 'rxjs/observable/dom/ajax';
import rootEpic from './root';
import {streamUrl} from '../config';

const socket = new WebSocket(streamUrl);
const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {getJSON: ajax.getJSON, getSocket: socket},
});

export default epicMiddleware;
