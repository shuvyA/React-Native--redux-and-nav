// placeReducer.js

import { ADD_PLACE, REMOVE_PLACE } from '../actions/types';

import _ from 'lodash';

const initialState = {
  placeName: '',
  places: []
};

const placeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: _.uniqueId('todo_'),
          value: action.payload
        })
      };
      case REMOVE_PLACE:
      // console.log(state.places,'state places');
      // console.log('Store del id:',action.payload);
      return{
        ...state,
        places: state.places.filter(place => place.key  !== action.payload)
      }
    default:
      return state;
  }
}

export default placeReducer;