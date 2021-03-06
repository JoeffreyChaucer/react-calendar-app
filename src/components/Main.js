import React from 'react';

import Sidebar from './sidebar/Sidebar.js';
import Calendar from './calendar/Calendar.js';

const Main = (props) => {
  return (
    <div className='wrapper d-flex justify-content-center align-items-center'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <Sidebar />
                  <Calendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
