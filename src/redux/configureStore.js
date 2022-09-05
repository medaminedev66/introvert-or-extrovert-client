import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { questionsReducer } from './questions/questions';

const reducer = combineReducers({
  questionsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
