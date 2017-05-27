import {FETCH_DATA, FETCH_DATA_FAILED, FETCH_DATA_FULFILLED} from '../constants';

export default function apiReducer(state = {
  data: [{number: 4, timeStamp: '12-05-2017 21:23:09'},
    {number: 3, timeStamp: '12-05-2017 21:23:09'},
    {number: 7, timeStamp: '12-05-2017 21:23:09'},
    {number: 6, timeStamp: '12-05-2017 21:23:09'}],
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
    case FETCH_DATA_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data,
      };
    }
    default: {
      return state;
    }

  }
}

