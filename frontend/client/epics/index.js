import {createEpicMiddleware} from 'redux-observable';
import readings from './readings';
import api from './api';

const epicMiddleware = createEpicMiddleware(readings, api);

export default epicMiddleware;
