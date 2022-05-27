import React, { createContext, useContext, useState } from 'react';

import { __ROUTES } from '../../../../features/__Routes/__Routes';

const sideBarContext = createContext();
export const useSideBarContext = () => useContext(sideBarContext);

export const SideBarProvider = ({ children }) => {
  const [menu, setMenu] = useState(__ROUTES.DASHBOARD.id);
  return (
    <sideBarContext.Provider
      value={{
        menu,
        setMenu,
      }}
    >
      {children}
    </sideBarContext.Provider>
  );
};
