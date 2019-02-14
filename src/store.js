// store.js

import { createStore, combineReducers , applyMiddleware } from 'redux';
import  {createLogger}  from 'redux-logger';

// import {reducers} from './reducers';
// import reducers from './reducers/index';


import placeReducer from './reducers/placeReducer';
import todoReducer from './reducers/todo';
import filtersReducer from './reducers/filters';
import addModalReducer from './reducers/add-modal';

// const rootReducer = {
//   places: placeReducer,
//   todo: todoReducer,
//   filter: filtersReducer,
//   addModal:addModalReducer
// };
// console.log({reducers});


const logger = createLogger();
// const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
// const store = createStoreWithMiddleware(combineReducers(reducers));
// export default store;

const rootReducer = combineReducers({
  places: placeReducer,
  todo: todoReducer,
  filter: filtersReducer,
  addModal:addModalReducer
});

// const configureStore = createStoreWithMiddleware(combineReducers(reducers));
const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;