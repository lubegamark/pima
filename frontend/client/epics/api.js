import {FETCH_DATA_FULFILLED, FETCH_DATA} from '../constants';

const fetchDataEpic = (action$, none, {getJSON}) =>
  action$.ofType(FETCH_DATA)
    .mergeMap(() =>
      getJSON('/api/readings')
        .map(response => ({
          type: FETCH_DATA_FULFILLED,
          payload: response,
        }))
    );

export default fetchDataEpic;
