import React from 'react';

const EventForm = () => {
  return (
    <div class='modal' tabindex='-1' id='add-event'>
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title'>Modal title</h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div class='modal-body'>
            <form>
              <div className='form-group'>
                <label className='control-label'>Event Title</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Title'
                  name='event-name'
                />
              </div>
              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  name='checkbox'
                />
                <label className='control-label'>
                  All-day event ? (optional)
                </label>
              </div>
              <div className='form-group'>
                <label className='control-label'>Start</label>
                <input
                  type='date'
                  className='form-control'
                  name='event-start'
                />
              </div>
              <div className='form-group'>
                <label className='control-label'>End</label>
                <input type='date' className='form-control' name='event-end' />
              </div>
              <div className='form-group'>
                <label className='control-label'>Choose Event Color</label>
                <select>
                  <option>Select color</option>
                  <option>Primary</option>
                  <option>Info</option>
                  <option>Danger</option>
                  <option>Success</option>
                </select>
              </div>
            </form>
          </div>
          <div class='modal-footer'>
            <button
              type='button'
              class='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button type='button' class='btn btn-primary'>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
