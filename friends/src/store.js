import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
