import React, { useState, useContext } from 'react';
import EventForm from './EventForm';
import moment from 'moment';
import AppContext from '../../context/App/appContext';

const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [color, setColor] = useState('Primary');

  const appContext = useContext(AppContext);
  const { addEvent, events, colors } = appContext;

  const colorObj = {
    primary: '#0275d8',
    success: '#5cb85c',
    info: '#5bc0de',
    warning: '#f0ad4e',
    danger: '#d9534f',
  };

  const closeModal = () => {
    reset();
  };

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

  const createEvent = () => {
    const event = setEvent(events.length + 1);
    addEvent(event);
    reset();
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
      bgColor: color,
      backgroundColor: colorObj[color],
    };

    return event;
  };

  const reset = () => {
    setColor('');
    setEventName('');
    setCheckBox(false);
    setShowTime(false);
    setStartDate(new Date());
    setEndDate(new Date());
  };

  return (
    <div>
      <EventForm
        modalId='add-event'
        title='Add Event'
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
        eventType={createEvent}
        buttonText='Save'
      />
    </div>
  );
};

export default AddEvent;
