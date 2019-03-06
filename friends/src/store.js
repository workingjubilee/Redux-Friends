import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {};

const middleware = [thunk, logger];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
