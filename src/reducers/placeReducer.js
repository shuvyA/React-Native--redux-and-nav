// placeReducer.js

import {
  ADD_PLACE,
  REMOVE_PLACE,
  TOGGLE_TODO
} from '../actions/types';

import _ from 'lodash';

const initialState = {
  placeName: '',
  places: []
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: _.uniqueId('todo_'),
          value: action.payload,
          completed: false
        })
      };
    case REMOVE_PLACE:
      // console.log('del todo', action.payload);
      return {
        ...state,
        places: state.places.filter(place => place.key !== action.payload)
      };
    case TOGGLE_TODO:
      // console.log('toogle todo', action.payload);
      // console.log({
      //   state
      // });


      return {
        ...state,
        places: state.places.map(todo =>
          (todo.key === action.payload) ?
          {
            ...todo,
            completed: !todo.completed
          } :
          todo
        )
      };
    default:
      return state;
  }
}

export default placeReducer;