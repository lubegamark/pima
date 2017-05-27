import {ActionsObservable} from 'redux-observable';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import api from '../../client/epics/api';
import * as types from '../../client/constants';

const mockResponse = {name: 'Bilbo Baggins'};
const action$ = ActionsObservable.of({type: types.FETCH_DATA});
const store = null; // not needed for this epic
const dependencies = { getJSON: url =>Observable.of(mockResponse) };

describe('api epic', () => {
  it('should create ajax observable', () => {
// Adapt this example to your test framework and specific use cases
    api(action$, store, dependencies)
      .toArray() // buffers all emitted actions until your Epic naturally completes()
      .subscribe(actions => {
        expect(actions).toEqual([{
          type: types.FETCH_DATA_FULFILLED,
          payload: mockResponse,
        }])
  });
});
});
