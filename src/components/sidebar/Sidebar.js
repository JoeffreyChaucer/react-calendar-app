import React from 'react';

const Sidebar = (props) => {
  return (
    <div className='col-lg-3'>
      <div className='d-grid'>
        <button className='btn btn-primary' type='button'>
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
    </div>
  );
};

export default Sidebar;
