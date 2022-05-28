import React from 'react';

import Home from './Home';
import { HomeProvider } from '../../__context';

const IndexHome = () => (
  <HomeProvider>
    <Home />;
  </HomeProvider>
);
export default IndexHome;
