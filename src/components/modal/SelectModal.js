import React, { useContext } from 'react';
import AppContext from '../../context/App/appContext';

const SelectModal = () => {
  const appContext = useContext(AppContext);
  const { selectedEvent, deleteSelectedEvent, selected } = appContext;

  const deleteSelected = (event) => {
    deleteSelectedEvent(event);
    selected({});
  };

  return (
    <div className='modal' tabIndex='-1' id='selected-modal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Select</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <div className='text-center row justify-content-center'>
              <button
                type='button'
                className='col-auto btn btn-danger'
                data-bs-dismiss='modal'
                onClick={() => deleteSelected(selectedEvent)}
              >
                Delete Event
              </button>
              <div className='col-auto'> or</div>

              <button
                type='button'
                className='col-auto btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#edit-event'
                data-bs-dismiss='modal'
              >
                Edit Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectModal;
