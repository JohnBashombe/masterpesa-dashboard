import React from 'react';

import { AppRoutes } from './routes/index';

import { AuthProvider } from './__context/index';
import { SideBarProvider } from './pages/__public/sidebar/__context/SideBarContext';

const App = () => {
  return (
    <AuthProvider>
      <SideBarProvider>
        <div className='bg-gray-50 h-screen w-screen'>
          <AppRoutes />
        </div>
      </SideBarProvider>
    </AuthProvider>
  );
};

export default App;
