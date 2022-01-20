import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventForm = (props) => {
  const {
    modalId,
    title,
    closeModal,
    eventName,
    inputChange,
    checkBox,
    onCheckBoxChange,
    showTime,
    startDate,
    endDate,
    onInputChange,
    color,
    colors,
    handleChange,
    eventType,
    buttonText,
  } = props;
  return (
    <div className='modal' tabIndex='-1' id={modalId}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={closeModal}
            ></button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='form-group'>
                <label className='control-label'>Event Title</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Title'
                  name='event-name'
                  value={eventName}
                  onChange={inputChange}
                />
              </div>
              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  name='checkbox'
                  value={checkBox}
                  checked={checkBox}
                  onChange={onCheckBoxChange}
                />
                <label className='control-label'>
                  All-day event ? (optional)
                </label>
              </div>

              <div className='form-group'>
                <label className='control-label'>Start</label>

                <div className='row g-3'>
                  <div className='col-auto'>
                    {!showTime ? (
                      <DatePicker
                        className='form-control'
                        showTimeSelect
                        timeFormat='p'
                        timeIntervals={1}
                        dateFormat='Pp'
                        selected={startDate}
                        onChange={onInputChange('startDate')}
                      />
                    ) : (
                      <DatePicker
                        className='form-control'
                        selected={startDate}
                        onChange={onInputChange('startDate')}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label className='control-label'>End</label>
                <div className='row g-3'>
                  <div className='col-auto'>
                    {!showTime ? (
                      <DatePicker
                        className='form-control'
                        showTimeSelect
                        timeFormat='p'
                        timeIntervals={1}
                        dateFormat='Pp'
                        selected={endDate}
                        onChange={onInputChange('endDate')}
                      />
                    ) : (
                      <DatePicker
                        className='form-control'
                        selected={endDate}
                        onChange={onInputChange('endDate')}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label className='control-label'>Choose Event Color</label>
                <select
                  className='form-control'
                  name='event-color'
                  onChange={handleChange}
                >
                  <option>Select color</option>
                  {colors.map((color) => (
                    <option value={color.toLowerCase()} key={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={closeModal}
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-dismiss='modal'
              onClick={eventType}
              disabled={!eventName || !startDate || !endDate || !color}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
