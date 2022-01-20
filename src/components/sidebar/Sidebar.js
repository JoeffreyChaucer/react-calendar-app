import React from 'react';
import AddEvent from '../../modal/AddEvent';

const Sidebar = (props) => {
  return (
    <div className='col-lg-3 bg-white p-3 rounded-3'>
      <div className='d-grid'>
        <button
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#add-event'
          type='button'
        >
          Create New Event
        </button>
        <div className='mt-t-20'>
          <br />
          <div className='rounded-2 external-event bg-primary'>
            Watch Movies
          </div>
          <div className='rounded-2 external-event bg-success'>
            Call Friends
          </div>
          <div className='rounded-2 external-event bg-danger'>Eat Dinner</div>
        </div>
      </div>
      <AddEvent />
    </div>
  );
};

export default Sidebar;
