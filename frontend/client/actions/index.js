import {START_LISTENING, STORE_READING, FETCH_DATA} from '../constants';

export const startListening = () => ({
  type: START_LISTENING,
});
export const fetchData = () => ({
  type: FETCH_DATA,
});
export const storeReading = (reading) => ({
  type: STORE_READING,
  payload: reading,
});
