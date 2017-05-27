import {combineReducers} from 'redux';
import api from './api';
import readings from './readings';

export default combineReducers({
  api,
  readings,
});
