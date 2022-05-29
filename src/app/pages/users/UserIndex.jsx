import React from 'react';

import Users from './Users';

import { UserProvider, AdminProvider } from '../../__context/index';

const UserIndex = () => (
  <AdminProvider>
    <UserProvider>
      <Users />
    </UserProvider>
  </AdminProvider>
);

export default UserIndex;
