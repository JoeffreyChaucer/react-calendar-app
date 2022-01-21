import React, { useContext } from 'react';
import AddEvent from '../modal/AddEvent';
import AppContext from '../../context/App/appContext';

const Sidebar = (props) => {
  const appContext = useContext(AppContext);
  const { events } = appContext;

  return (
    <div className='col-lg-3 bg-white p-3 rounded-3'>
      <div className='d-grid'>
        <button
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#add-event'
          type='button'
        >
          Create New Event
        </button>
        <div className='mt-t-20'>
          <br />

          {events.length > 0
            ? events.map((event, index) => (
                <div
                  className={`rounded-2 external-event bg-${event.bgColor}`}
                  key={event.id + index}
                >
                  {event.title}
                </div>
              ))
            : 'No Events Added'}
        </div>
      </div>
      <AddEvent />
    </div>
  );
};

export default Sidebar;
