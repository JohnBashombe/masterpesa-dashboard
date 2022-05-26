import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  Home,
  Admins,
  Users,
  NotFound,
  Settings,
  Transactions,
} from '../pages/index';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/admins' exact element={<Admins />} />
        <Route path='/users' exact element={<Users />} />
        <Route path='/settings' exact element={<Settings />} />
        <Route path='/transactions' exact element={<Transactions />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
