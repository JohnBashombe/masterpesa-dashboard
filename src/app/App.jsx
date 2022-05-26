import React from 'react';

import AppRoutes from './routes/AppRoutes';

import { SideBarProvider } from './pages/__public/sidebar/__context/SideBarContext';

const App = () => {
  return (
    <SideBarProvider>
      <div className='bg-gray-50 h-screen w-screen'>
        <AppRoutes />
      </div>
    </SideBarProvider>
  );
};

export default App;
