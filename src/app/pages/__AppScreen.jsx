import React from 'react';

import SideBar from './__public/sidebar/SideBar';
import TopBar from './__public/topBar/TopBar';

const AppScreen = ({ screen }) => {
  return (
    <div>
      <div className='flex flex-row h-screen bg-white'>
        <SideBar />
        <div className='w-full'>
          <div className='flex flex-col'>
            <TopBar />
            {screen}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppScreen;
