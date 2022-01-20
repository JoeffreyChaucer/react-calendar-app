import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = (props) => {
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
        />
      </div>
    </div>
  );
};

export default Calendar;
