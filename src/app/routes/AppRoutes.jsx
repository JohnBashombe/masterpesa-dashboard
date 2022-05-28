import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { __ROUTES } from '../features/index';

import {
  Home,
  Users,
  Login,
  Admins,
  AddAdmin,
  NotFound,
  Settings,
  Transactions,
} from '../pages/index';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={__ROUTES.LOGIN.route} element={<Login />} />
        <Route path={__ROUTES.USERS.route} element={<Users />} />
        <Route path={__ROUTES.ADMINS.route} element={<Admins />} />
        <Route path={__ROUTES.DASHBOARD.route} element={<Home />} />
        <Route path={__ROUTES.SETTINGS.route} element={<Settings />} />
        <Route path={__ROUTES.ADD_ADMIN.route} element={<AddAdmin />} />
        <Route path={__ROUTES.PAGE_NOT_FOUND.route} element={<NotFound />} />
        <Route path={__ROUTES.TRANSACTIONS.route} element={<Transactions />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
