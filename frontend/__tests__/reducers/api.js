import reducer from '../../client/reducers/api';
import * as types from '../../client/constants';
import moment from 'moment';

const data = {
    data: [{number: 4, timeStamp: '2017-05-26T11:25:49+03:00'},
      {number: 3, timeStamp: '2017-05-26T11:25:49+03:00'},
      {number: 7, timeStamp: '2017-05-26T11:25:49+03:00'},
      {number: 6, timeStamp: '2017-05-26T11:25:49+03:00'}],
    fetching: false,
    fetched: false,
    error: null,
  }
describe('api reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(data);
  })

  it('should handle FETCH_DATA', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_DATA,
      })
    ).toEqual(
      {...data, fetching: true}
    );
  });

  it('should handle FETCH_DATA FAILED', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_DATA_FAILED,
        error: 'err',
      })
    ).toEqual(
      {...data, fetching: false, error: 'err'}
    );
  });

  it('should handle FETCH_DATA_FULFILLED', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_DATA_FULFILLED,
        payload: data.data,
      })
    ).toEqual(
      {...data, fetching: false, fetched: true}
    );
  });
  it('should handle STORE_READING', () => {
    expect(
      reducer(undefined, {
        type: types.STORE_READING,
        payload: 1,
      })
    ).toEqual(
      {...data, data: [{number: 1, timeStamp: moment().format()}, ...data.data]}
    );
  });

})
