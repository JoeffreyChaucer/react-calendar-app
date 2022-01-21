import { ADD_EVENT, GET_EVENTS } from '../types.js';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
