import React, { useContext, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AppContext from '../../context/App/appContext';

const Calendar = () => {
  const appContext = useContext(AppContext);
  const { events, getEvents } = appContext;

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, [events]);

  return (
    <div className='col-lg-9'>
      <div className='bg-white p-3 rounded-3'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          headerToolbar={{
            start: 'prev,next,today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={events}
        />
      </div>
    </div>
  );
};

export default Calendar;
