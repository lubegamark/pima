import {combineEpics} from 'redux-observable';
import readings from './readings';
import api from './api';

const rootEpic = combineEpics(
  readings,
  api
);
export default rootEpic;
