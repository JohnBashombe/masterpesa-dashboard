import React, { createContext, useContext, useState } from 'react';

import __ENDPOINTS from '../___api/endpoints';
import RequestHandler from '../___api/requestHandler';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  /**
   * @author Ntavigwa Bashombe
   * @param {*} data
   * @returns
   */
  const getUsers = async (userToken) => {
    const { data, message, status } = await RequestHandler.get(
      __ENDPOINTS.USERS,
      userToken
    );

    if (data !== undefined && data !== null) {
      setUsers(data);
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

  /**
   * @author Ntavigwa Bashombe
   * @param {*} data
   * @returns
   */
  const blockUser = async (requestData, userToken) => {
    const { data, message, status } = await RequestHandler.put(
      __ENDPOINTS.DELETE_USER,
      requestData,
      userToken
    );

    if (data !== undefined && data !== null) {
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
    <UserContext.Provider value={{ users, getUsers, blockUser }}>
      {children}
    </UserContext.Provider>
  );
};
