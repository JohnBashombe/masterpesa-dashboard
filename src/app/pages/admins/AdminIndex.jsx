import Admins from './Admins';
import AddAdmin from './AddAdmin';

import { AdminProvider, UserProvider } from '../../__context/index';

export const AdminIndex = () => (
  <UserProvider>
    <AdminProvider>
      <Admins />;
    </AdminProvider>
  </UserProvider>
);
export const AddAdminIndex = () => (
  <AdminProvider>
    <AddAdmin />;
  </AdminProvider>
);
