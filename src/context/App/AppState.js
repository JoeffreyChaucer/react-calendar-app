import React, { useReducer } from 'react';

import AppReducer from './appReducer';
import AppContext from './appContext';

import { ADD_EVENT } from '../types.js';

import { useLocalStorage } from '../../hooks/storage';

const AppState = (props) => {
  const initialState = {
    events: [],
    colors: ['Primary', 'Danger', 'Success', 'Info', 'Warning'],
    selectedEvent: {},
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [item, setValue] = useLocalStorage('events');

  const addEvent = (event) => {
    let userEvents = [...state.events];
    userEvents.push(event);
    setValue(userEvents);
    dispatch({
      type: ADD_EVENT,
      payload: userEvents,
    });
  };

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        colors: state.colors,
        selectedEvent: state.selectedEvent,
        addEvent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
