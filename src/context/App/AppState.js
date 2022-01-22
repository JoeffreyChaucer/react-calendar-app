import React, { useReducer } from 'react';

import AppReducer from './appReducer';
import AppContext from './appContext';

import {
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  GET_EVENTS,
  SELECT_EVENT,
} from '../types.js';

import { useLocalStorage } from '../../hooks/storage';

const AppState = (props) => {
  const initialState = {
    events: [],
    colors: ['Primary', 'Danger', 'Success', 'Info', 'Warning'],
    selectedEvent: {},
    colorObj: {
      primary: '#0275d8',
      success: '#5cb85c',
      info: '#5bc0de',
      warning: '#f0ad4e',
      danger: '#d9534f',
    },
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [item, setValue] = useLocalStorage('events');
  //eslint-disable-next-line
  const [selectedItem, setSelectedItem] = useLocalStorage('selectedEvent');

  const addEvent = (event) => {
    let userEvents = [...state.events];
    userEvents.push(event);
    setValue(userEvents);
    dispatch({
      type: ADD_EVENT,
      payload: userEvents,
    });
  };

  const getEvents = () => {
    if (item) {
      dispatch({
        type: GET_EVENTS,
        payload: item,
      });
    }
  };

  const selected = (event) => {
    setSelectedItem(event);
    dispatch({
      type: SELECT_EVENT,
      payload: event,
    });
  };

  const editSelectedEvents = (event) => {
    const newEvents = item.map((e) => {
      return e.id === event.id ? event : e;
    });
    setValue(newEvents);
    dispatch({
      type: EDIT_EVENT,
      payload: newEvents,
    });
  };

  const deleteSelectedEvents = (event) => {
    const newEventsArray = item.filter((e) => e.id !== event.id);
    setValue(newEventsArray);

    dispatch({
      type: DELETE_EVENT,
      payload: newEventsArray,
    });
  };

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        colors: state.colors,
        selectedEvent: state.selectedEvent,
        colorObj: state.colorObj,
        addEvent,
        getEvents,
        selected,
        editSelectedEvents,
        deleteSelectedEvents,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
