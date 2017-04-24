import * as types from './actionTypes';

const initialEventsState = {
  events: [],
  nextIndex: 0,
};

export const eventReducer = (state = initialEventsState, action) => {
  const newList = state.events.slice(0);
  switch(action.type) {
    case types.ADD_EVENT:
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
      console.log('Delete Event called!');
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === action.id) {
          newList.splice(i, 1);
        }
      }
      return {
        ...state,
        events: newList,
      };
    default:
      return state;
  }
};