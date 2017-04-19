import * as types from './actionTypes';

export const addEvent = (event) => (
  {
    type: types.ADD_EVENT,
    event,
  }
);