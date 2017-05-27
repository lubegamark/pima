import {ActionsObservable} from 'redux-observable';
import {Server} from 'mock-socket';
import readingsEpic from '../../client/epics/readings';
import * as types from '../../client/constants';


const mockServer = new Server('ws://localhost:8080');
const action$ = ActionsObservable.of({type: types.START_LISTENING});
const store = null;
const dependencies = {
  getSocket: mockServer,
};
const response = {data: '{"id": 388, "value": 5, "created": "Sat 27 May 2017 12:25"}'}



describe('readings epic', () => {
  it('should create an action to start listening', () => {
    mockServer.on('connection', () => {
      mockServer.send(response);
    });

    readingsEpic(action$, store, dependencies)
      .toArray()
      .subscribe(actions => {
        expect(actions).toEqual({
          type: types.READING_RECEIVED,
          payload: 5,
        });

      });
  })
});