import {createEpicMiddleware} from 'redux-observable';
import {ajax} from 'rxjs/observable/dom/ajax';
import rootEpic from './root';

const socket = new WebSocket('ws://207.154.204.214:8000/devices/test-device-1/readings/stream/');
const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {getJSON: ajax.getJSON, getSocket: socket},
});

export default epicMiddleware;
