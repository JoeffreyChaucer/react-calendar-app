import React, { useEffect, useContext } from 'react';
import moment from 'moment';
import AppContext from '../../context/App/appContext';
import SelectModal from '../modal/SelectModal';
import { useLocalStorage } from '../../hooks/storage';
import notificationSound from '../../assets/notification.wav';
import UIfx from 'uifx';

const sound = new UIfx(notificationSound);

const Toast = () => {
  const appContext = useContext(AppContext);
  const { activeEvents, events, selected } = appContext;

  const [getToastEvent, setToastActiveEvent] =
    useLocalStorage('toastActiveEvent');

  useEffect(() => {
    const interval = setInterval(() => {
      addEvent();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    //eslint-disable-next-line
  }, [events]);

  useEffect(() => {
    if (getToastEvent && Object.keys(getToastEvent).length) {
      // play sound
      sound.play();
    }
  }, [getToastEvent]);

  const addEvent = () => {
    if (events.length) {
      for (const event of events) {
        const startEventDate = `${moment(new Date(event.start)).format(
          'YYYY-MM-DDTHH:mm'
        )}`;
        const now = moment(new Date()).format('YYYY-MM-DDTHH:mm');
        if (now === startEventDate) {
          activeEvents(event);
          setToastActiveEvent(event);
        }
      }
    }
  };

  return (
    <>
      <div aria-live='polite' aria-atomic='true' className='position-relative'>
        <div className='toast-container position-absolute top-0 end-0 p-3'>
          {events.map((e, i) => (
            <div
              key={i}
              className='toast show'
              role='alert'
              aria-live='assertive'
              aria-atomic='true'
            >
              <div className='toast-header'>
                <svg width='25' height='25' className='me-2'>
                  <rect
                    width='25'
                    height='25'
                    rx='8'
                    fill={e.backgroundColor}
                  />
                </svg>
                <strong className='me-auto'>{e.title}</strong>
                <small className='text-muted'>
                  OverDue {moment(e.start).fromNow()}
                </small>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-toggle='modal'
                  data-bs-target='#selected-modal'
                  onClick={() => selected(e)}
                ></button>
              </div>
              <div className='toast-body'>{e.description}</div>
            </div>
          ))}
        </div>
        <SelectModal />
      </div>
    </>
  );
};

export default Toast;
