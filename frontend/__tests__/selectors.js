import {reading, data, listening ,maximumReading, minimumReading} from '../client/selectors';

const state = {
  readings: {number: 0, listening: false},
  api: {
    data: [{number: 4, timeStamp: ''},
      {number: 3, timeStamp: ''},
      {number: 7, timeStamp: ''},
      {number: 6, timeStamp: ''}],
    fetching: false,
    fetched: false,
    error: null,
  },
}

describe('selectors', () => {
  it('get reading ', () => {
    expect(reading(state)).toBe(state.readings.number);
  });
  it('select api data', () => {
    expect(data(state)).toEqual(state.api.data);
  });
  it('select listening data', () => {
    expect(listening(state)).toBe(state.readings.listening);
  });
  it('return minimum reading', () => {
    expect(minimumReading.resultFunc(state.api.data)).toBe(3);
  });
  it('return maximum reading', () => {
    expect(maximumReading.resultFunc(state.api.data)).toBe(7);
  });
});
