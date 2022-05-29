import React from 'react';

import Settings from './Settings';

import { AdminProvider } from '../../__context';

const SettingsIndex = () => (
  <AdminProvider>
    <Settings />
  </AdminProvider>
);

export default SettingsIndex;
