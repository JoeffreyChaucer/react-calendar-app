import React, { useContext, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AppContext from '../../context/App/appContext';
import Toast from '../toast/Toast.js';

const Calendar = () => {
  const appContext = useContext(AppContext);
  const { events, selected, getEvents, getActiveEvents, activeCalendarEvents } =
    appContext;

  useEffect(() => {
    getEvents();

    // eslint-disable-next-line
  }, [events]);

  useEffect(() => {
    getActiveEvents();

    // eslint-disable-next-line
  }, [activeCalendarEvents]);

  const handleEventClick = (info) => {
    const event = events.find((e) => e.id === parseInt(info.event.id, 10));
    selected(event);
    info.el.setAttribute('data-toggle', 'modal');
    info.el.setAttribute('data-target', '#selection-modal');
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
          dayMaxEventRows={3}
        />
        <Toast />
      </div>
    </div>
  );
};

export default Calendar;
