import reducer from '../../client/reducers/readings';
import * as types from '../../client/constants';

const data = {
    number: 0,
    listening: false,
  }
describe('readings reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(data);
  })

  it('should handle START_LISTENING', () => {
    expect(
      reducer(undefined, {
        type: types.START_LISTENING,
      })
    ).toEqual(
      {...data, listening: true}
    );
  });

  it('should handle STOP_LISTENING', () => {
    expect(
      reducer(undefined, {
        type: types.STOP_LISTENING,
      })
    ).toEqual(
      {...data, listening: false}
    );
  });

  it('should handle FAILED_LISTENING', () => {
    expect(
      reducer(undefined, {
        type: types.FAILED_LISTENING,
      })
    ).toEqual(
      {...data, listening: false}
    );
  });
  it('should handle READING_RECEIVED', () => {
    expect(
      reducer(undefined, {
        type: types.READING_RECEIVED,
        payload: {reading:1},
      })
    ).toEqual(
      {...data, number:1}
    );
  });

})
