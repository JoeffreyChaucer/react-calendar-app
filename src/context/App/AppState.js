import React, { useReducer } from 'react';

import AppReducer from './appReducer';
import AppContext from './appContext';

const AppState = (props) => {
  const initialState = {
    events: [],
    colors: ['Primary', 'Danger', 'Success', 'Info', 'Warning'],
    selectedEvent: {},
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        events: state.events,
        colors: state.colors,
        selectedEvent: state.selectedEvent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
