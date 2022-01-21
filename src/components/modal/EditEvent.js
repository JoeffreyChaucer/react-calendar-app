import React, { useState, useContext, useEffect } from 'react';
import EventForm from './EventForm';
import moment from 'moment';
import AppContext from '../../context/App/appContext';

const EditEvent = () => {
  const [eventName, setEventName] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [color, setColor] = useState('Primary');

  const appContext = useContext(AppContext);
  const { events, colors, selectedEvent, colorObj, editSelectedEvents } =
    appContext;

  useEffect(() => {
    if (Object.keys(selectedEvent).length) {
      setColor(selectedEvent.bgColor);
      setEventName(selectedEvent.title);
      setCheckBox(selectedEvent.allDay);
      let start = '';
      let end = '';
      if (!selectedEvent.allDay) {
        setShowTime(false);
        start = moment(new Date(selectedEvent.start)).format().toString();
        end = moment(new Date(selectedEvent.end)).format().toString();
      } else {
        setShowTime(true);
        start = moment(new Date(selectedEvent.start))
          .format('YYYY-MM-DD')
          .toString();
        end = moment(new Date(selectedEvent.end))
          .format('YYYY-MM-DD')
          .toString();
      }
      setStartDate(new Date(start));
      setEndDate(new Date(end));
    }
    //eslint-disable-next-line
  }, [selectedEvent, events]);
  const closeModal = () => {};

  const inputChange = (e) => {
    setEventName(e.target.value);
  };

  const onCheckBoxChange = (e) => {
    if (e.target.checked === true) {
      setCheckBox(true);
      setShowTime(true);
    } else {
      setCheckBox(false);
      setShowTime(false);
    }
  };

  const onInputChange = (propertyName) => (e) => {
    if (propertyName === 'startDate') {
      setStartDate(e);
    }
    if (propertyName === 'endDate') {
      setEndDate(e);
    }
  };

  const handleChange = (e) => {
    if (e.target.value !== 'Select color') {
      setColor(e.target.value);
    } else {
      setColor('');
    }
  };

  const setEvent = (id) => {
    let start = '';
    let end = '';
    if (!checkBox) {
      start = moment(startDate).format().toString();
      end = moment(endDate).format().toString();
    } else {
      start = moment(startDate).format('YYYY-MM-DD').toString();
      end = moment(endDate).format('YYYY-MM-DD').toString();
    }

    const event = {
      id,
      title: eventName,
      start,
      end,
      allDay: checkBox,
      bgColor: color,
      backgroundColor: colorObj[color],
    };

    return event;
  };

  const editEvent = () => {
    const event = setEvent(selectedEvent.id);
    editSelectedEvents(event);
  };

  return (
    <div>
      <EventForm
        modalId='edit-event'
        title='Edit Event'
        closeModal={closeModal}
        eventName={eventName}
        inputChange={inputChange}
        checkBox={checkBox}
        onCheckBoxChange={onCheckBoxChange}
        showTime={showTime}
        startDate={startDate}
        endDate={endDate}
        onInputChange={onInputChange}
        color={color}
        colors={colors}
        handleChange={handleChange}
        eventType={editEvent}
        buttonText='Update'
        colorObj={colorObj}
      />
    </div>
  );
};

export default EditEvent;
