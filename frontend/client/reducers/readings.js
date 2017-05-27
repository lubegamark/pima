import {START_LISTENING, STOP_LISTENING, FAILED_LISTENING, READING_RECEIVED} from '../constants';

export default function reading(state = {
  number: 0,
  listening: false,
}, action) {
  switch (action.type) {
    case START_LISTENING: {
      return {...state, listening: true};
    }
    case STOP_LISTENING: {
      return {...state, listening: false};
    }
    case FAILED_LISTENING: {
      return {...state, listening: false};
    }
    case READING_RECEIVED: {
      return {...state, number: action.payload.reading};
    }

    default: {
      return state;
    }

  }
}

