import moment from 'moment';
import {STORE_READING, FETCH_DATA, FETCH_DATA_FAILED, FETCH_DATA_FULFILLED} from '../constants';


export default function apiReducer(state = {
  data: [{number: 4, timeStamp: '2017-05-26T11:25:49+03:00'},
    {number: 3, timeStamp: '2017-05-26T11:25:49+03:00'},
    {number: 7, timeStamp: '2017-05-26T11:25:49+03:00'},
    {number: 6, timeStamp: '2017-05-26T11:25:49+03:00'}],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {...state, fetching: true};
    }
    case FETCH_DATA_FAILED: {
      return {...state, fetching: false, error: action.error};
    }
    case STORE_READING: {
      return {
        ...state,
        data: [{number: action.payload, timeStamp: moment().format()}, ...state.data],
      };
    }
    case FETCH_DATA_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload,
      };
    }
    default: {
      return state;
    }

  }
}

