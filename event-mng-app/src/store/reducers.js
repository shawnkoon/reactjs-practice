import * as types from './actionTypes';

const initialEventsState = {
  events: [],
  nextIndex: 0,
};

export const eventReducer = (state = initialEventsState, action) => {
  switch(action.type) {
    case types.ADD_EVENT:
      const newList = state.events;
      const newEvent = {
        id: state.nextIndex++,
        event: action.event, 
      };
      newList.push(newEvent);
      return {
        ...state,
        events: newList,
      };
    case types.DELETE_EVENT:
      return state;
    default:
      return state;
  }
};