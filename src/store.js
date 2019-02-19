// store.js

import { createStore, combineReducers , applyMiddleware } from 'redux';
// import  {createLogger}  from 'redux-logger';
import placeReducer from './reducers/placeReducer';


// const logger = createLogger();


const rootReducer = combineReducers({
  places: placeReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;