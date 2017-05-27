import {FETCH_DATA_FULFILLED, FETCH_DATA} from '../constants';
import {dataUrl} from '../config';


const fetchDataEpic = (action$, none, {getJSON}) =>
  action$.ofType(FETCH_DATA)
    .mergeMap(() =>
      getJSON(dataUrl)
        .map(response => ({
          type: FETCH_DATA_FULFILLED,
          payload: response.map(item =>
            ({number: parseInt(item.value, 0), timeStamp: item.timeStamp}))}))
          );

export default fetchDataEpic;
