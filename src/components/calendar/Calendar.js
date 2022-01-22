import React, { useContext, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AppContext from '../../context/App/appContext';

const Calendar = () => {
  const appContext = useContext(AppContext);
  const { events, getEvents, selected } = appContext;

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, [events]);

  const handleEventClick = (info) => {
    const event = events.find((e) => e.id === parseInt(info.event.id, 10));
    selected(event);
    info.el.setAttribute('data-bs-toggle', 'modal');
    info.el.setAttribute('data-bs-target', '#selected-modal');
  };

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
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

export default Calendar;
