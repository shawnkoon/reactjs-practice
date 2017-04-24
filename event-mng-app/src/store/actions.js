import * as types from './actionTypes';

export const addEvent = (event) => (
  {
    type: types.ADD_EVENT,
    event,
  }
);

export const deleteEvent = (id) => (
  {
    type: types.DELETE_EVENT,
    id,
  }
);