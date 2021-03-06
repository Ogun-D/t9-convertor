import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const middle = applyMiddleware(thunk);

export default createStore(reducers, {}, middle);
