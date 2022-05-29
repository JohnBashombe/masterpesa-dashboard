import React from 'react';

import { __ROUTES } from '../features/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  Login,
  NotFound,
  SettingsIndex,
  IndexHome,
  UserIndex,
  TransIndex,
  AdminIndex,
  AddAdminIndex,
} from '../pages/index';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={__ROUTES.LOGIN.route} element={<Login />} />
        <Route path={__ROUTES.USERS.route} element={<UserIndex />} />
        <Route path={__ROUTES.ADMINS.route} element={<AdminIndex />} />
        <Route path={__ROUTES.DASHBOARD.route} element={<IndexHome />} />
        <Route path={__ROUTES.SETTINGS.route} element={<SettingsIndex />} />
        <Route path={__ROUTES.ADD_ADMIN.route} element={<AddAdminIndex />} />
        <Route path={__ROUTES.PAGE_NOT_FOUND.route} element={<NotFound />} />
        <Route path={__ROUTES.TRANSACTIONS.route} element={<TransIndex />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
