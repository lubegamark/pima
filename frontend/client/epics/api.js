import moment from 'moment';
import {FETCH_DATA_FULFILLED, FETCH_DATA} from '../constants';
import {dataUrl} from '../config';


const fetchDataEpic = (action$, none, {getJSON}) =>
  action$.ofType(FETCH_DATA)
    .mergeMap(() =>
      getJSON(dataUrl)
        .map(response => ({
          type: FETCH_DATA_FULFILLED,
          payload: {number: response.value, timeStamp: moment().format()},
        }))
    );

export default fetchDataEpic;
