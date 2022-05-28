import React, { createContext, useContext, useState } from 'react';

import __ENDPOINTS from '../___api/endpoints';
import RequestHandler from '../___api/requestHandler';

const HomeContext = createContext();
export const useHomeContext = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const [stats, setStats] = useState(null);
  /**
   * @author Ntavigwa Bashombe
   * @param {*} data
   * @returns
   */
  const get = async (userToken) => {
    const { data, message, status } = await RequestHandler.get(
      __ENDPOINTS.ADMIN_STATS,
      userToken
    );

    if (data !== undefined && data !== null) {
      setStats(data);
      return {
        data,
        message,
        status,
      };
    } else {
      return {
        message,
        status,
      };
    }
  };

  return (
    <HomeContext.Provider value={{ stats, get }}>
      {children}
    </HomeContext.Provider>
  );
};
