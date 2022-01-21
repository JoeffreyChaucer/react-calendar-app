import { ADD_EVENT } from '../types.js';

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};
