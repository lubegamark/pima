import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import epicMiddleware from '../epics';

const store = createStore(reducers,applyMiddleware(epicMiddleware));

export default store;
