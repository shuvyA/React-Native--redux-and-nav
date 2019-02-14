import * as actions from './types';

export function showAll() {
  return {
    type: actions.SET_VISIBILITY_FILTER,
    filter: actions.VisibilityFilters.ALL
  };
}

export function showCompleted() {
  return {
    type: actions.SET_VISIBILITY_FILTER,
    filter: actions.VisibilityFilters.COMPLETED
  };
}

export function showIncomplete() {
  return {
    type: actions.SET_VISIBILITY_FILTER,
    filter: actions.VisibilityFilters.INCOMPLETE
  };
}
