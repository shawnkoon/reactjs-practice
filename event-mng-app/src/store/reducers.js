import * as types from './actionTypes';
import { bake_cookie, read_cookie } from 'sfcookies';

const initialEventsState = {
  events: [],
  nextIndex: 0,
};

export const eventReducer = (state = read_cookie('event_state'), action) => {
  if (!state.events) {
    state = initialEventsState;
  }

  const newList = state.events.slice(0);
  let newState = {};

  
  switch(action.type) {
    case types.ADD_EVENT:
      const newEvent = {
        id: state.nextIndex++,
        event: action.event, 
      };
      newList.push(newEvent);
      newState = {
        ...state,
        events: newList,
      };
      bake_cookie('event_state', newState);
      return newState;
    case types.DELETE_EVENT:
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === action.id) {
          newList.splice(i, 1);
        }
      }
      newState = {
        ...state,
        events: newList,
      };
      bake_cookie('event_state', newState);
      return newState;
    default:
      return state;
  }
};