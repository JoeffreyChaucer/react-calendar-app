import React, { useState, useContext } from 'react';
import EventForm from './EventForm';
import moment from 'moment';
import AppContext from '../../context/App/appContext';

const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [startDate, setStartDate] = useState(moment().toDate());
  const [endDate, setEndDate] = useState(moment().toDate());
  const [color, setColor] = useState('Primary');

  const appContext = useContext(AppContext);
  const { addEvent, events, colors, colorObj } = appContext;

  const closeModal = () => {
    reset();
  };

  const inputChange = (e) => {
    const attributeName = e.target.getAttribute('name');
    if (attributeName === 'event-name') {
      setEventName(e.target.value);
    }
    if (attributeName === 'description') {
      setDescription(e.target.value);
    }
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
    const start = moment(startDate).format();
    let end = '';
    if (!checkBox) {
      end = moment(endDate).format();
    } else {
      end = moment(endDate).format('YYYY-MM-DD');
    }

    const event = {
      id,
      title: eventName,
      description,
      start,
      end,
      allDay: checkBox,
      bgColor: color,
      backgroundColor: colorObj[color],
    };

    return event;
  };

  const reset = () => {
    setColor('');
    setEventName('');
    setDescription('');
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
        description={description}
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
        colorObj={colorObj}
      />
    </div>
  );
};

export default AddEvent;
