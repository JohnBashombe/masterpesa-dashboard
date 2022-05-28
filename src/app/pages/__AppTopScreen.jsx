import React from 'react';

import { TopBar, SideBar } from './__public/index';

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
