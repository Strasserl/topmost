import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import student from './student';
import messageReducer from './teacherMessages';
import answerReducer from './studentAnswers';

const reducer = combineReducers({ student, messageReducer, answerReducer });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './student';
export * from './teacherMessages';
