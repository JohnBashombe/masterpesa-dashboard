import React from 'react';

import TopBar from './__public/topBar/TopBar';
import SideBar from './__public/sidebar/SideBar';

const AppTopScreen = ({ screen }) => {
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

export default AppTopScreen;
