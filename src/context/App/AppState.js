import React, { useReducer } from 'react';

import AppReducer from './appReducer';
import AppContext from './appContext';
import _ from 'lodash';

import {
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  GET_EVENTS,
  SELECT_EVENT,
  ACTIVE_EVENTS,
  GET_ACTIVE_EVENTS,
} from '../types.js';

import { useLocalStorage } from '../../hooks/storage';

const AppState = (props) => {
  const initialState = {
    events: [],
    colors: ['Primary', 'Danger', 'Success', 'Info', 'Warning'],
    selectedEvent: {},
    activeCalendarEvents: [],
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
  const [, setSelectedItem] = useLocalStorage('selectedEvent');
  const [active, setActiveEvents] = useLocalStorage('activeCalendarEvents');
  const [, setToastActiveEvent] = useLocalStorage('toastActiveEvent');
  // Get active calendar events
  const getActiveEvents = () => {
    if (active) {
      dispatch({
        type: GET_ACTIVE_EVENTS,
        payload: active,
      });
    }
  };
  // Set due events
  const activeEvents = (event) => {
    let calendarEvents = [...state.activeCalendarEvents];
    calendarEvents.push(event);
    const activeEventsArray = _.uniqBy(calendarEvents, 'id');
    setActiveEvents(activeEventsArray);
    dispatch({
      type: ACTIVE_EVENTS,
      payload: activeEventsArray,
    });
  };

  const addEvent = (event) => {
    let userEvents = [...state.events];
    userEvents.push(event);
    setValue(userEvents);
    dispatch({
      type: ADD_EVENT,
      payload: userEvents,
    });
  };

  // Get all events from storage
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

  const editSelectedEvent = (event) => {
    const newEvents = item.map((e) => {
      return e.id === event.id ? event : e;
    });
    setValue(newEvents);
    dispatch({
      type: EDIT_EVENT,
      payload: newEvents,
    });
  };

  const deleteSelectedEvent = (event) => {
    const newEventsArray = item.filter((e) => e.id !== event.id);
    setValue(newEventsArray);
    dispatch({
      type: DELETE_EVENT,
      payload: newEventsArray,
    });

    const activeEventsArray = active.filter((e) => e.id !== event.id);
    setActiveEvents(activeEventsArray);
    dispatch({
      type: ACTIVE_EVENTS,
      payload: activeEventsArray,
    });

    setToastActiveEvent({});
  };

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        colors: state.colors,
        selectedEvent: state.selectedEvent,
        activeCalendarEvents: state.activeCalendarEvents,
        colorObj: state.colorObj,
        addEvent,
        getEvents,
        selected,
        editSelectedEvent,
        deleteSelectedEvent,
        activeEvents,
        getActiveEvents,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
