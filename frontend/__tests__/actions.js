import * as actions from '../client/actions';
import * as types from '../client/constants';

describe('actions', () => {
  it('should create an action to start listening', () => {
    const expectedAction = {
      type: types.START_LISTENING,
    }
    expect(actions.startListening()).toEqual(expectedAction);
  })
})