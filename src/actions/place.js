// place.js
import * as actions from './types';
import { ADD_PLACE, REMOVE_PLACE, TOGGLE_TODO } from './types';
import _ from 'lodash';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    id: _.uniqueId('todo_'),
    payload: placeName
  }
}


export const removePlace = placeId => {
  return {
    type: REMOVE_PLACE,
    payload: placeId
  }
}


export const toggleTodo = placeId => {
  return {
    type: 'TOGGLE_TODO',
    payload: placeId
  }
}