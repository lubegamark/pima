import {START_LISTENING, FETCH_DATA} from '../constants';

export const startListening = () => ({
  type: START_LISTENING,
});
export const fetchData = () => ({
  type: FETCH_DATA,
});
