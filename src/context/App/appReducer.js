import {
  ADD_EVENT,
  GET_EVENTS,
  SELECT_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  ACTIVE_EVENTS,
  GET_ACTIVE_EVENTS,
} from '../types';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ACTIVE_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case GET_ACTIVE_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case ADD_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case SELECT_EVENT:
      return {
        ...state,
        selectedEvent: action.payload,
      };
    case EDIT_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};
