import * as actions from '../client/actions';
import * as types from '../client/constants';

describe('actions', () => {
  it('should create an action to start listening', () => {
    const expectedAction = {
      type: types.START_LISTENING,
    }
    expect(actions.startListening()).toEqual(expectedAction);
  })
  it('should create an action to start fetching', () => {
    const expectedAction = {
      type: types.FETCH_DATA,
    }
    expect(actions.fetchData()).toEqual(expectedAction);
  })
  it('should create an action to store reading', () => {
    const expectedAction = {
      type: types.STORE_READING,
      payload:1,
    }
    expect(actions.storeReading(1)).toEqual(expectedAction);
  })
})