import React, { createContext, useContext, useState } from 'react';

import __ENDPOINTS from '../___api/endpoints';
import RequestHandler from '../___api/requestHandler';

const AdminContext = createContext();
export const useAdminContext = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [admins, setAdmins] = useState(null);
  /**
   * @author Ntavigwa Bashombe
   * @param {*} data
   * @returns
   */
  const getAdmins = async (userToken) => {
    const { data, message, status } = await RequestHandler.get(
      __ENDPOINTS.ADMINS,
      userToken
    );

    if (data !== undefined && data !== null) {
      setAdmins(data);
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
  const blockAdmin = async (requestData, userToken) => {
    const { data, message, status } = await RequestHandler.put(
      __ENDPOINTS.DELETE_ADMIN,
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

  /**
   * @author Ntavigwa Bashombe
   * @param {*} data
   * @returns
   */
  const addAdmin = async (requestData, userToken) => {
    const { data, token, message, status } = await RequestHandler.post(
      __ENDPOINTS.ADMIN_REGISTER,
      requestData,
      userToken
    );

    if (token !== undefined && token !== null) {
      return {
        data,
        message,
        status,
        token,
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
  const updatePassword = async (requestData, userToken) => {
    const { data, token, message, status } = await RequestHandler.put(
      __ENDPOINTS.UPDATE_PASSWORD_URL,
      requestData,
      userToken
    );

    if (token !== undefined && token !== null) {
      return {
        data,
        message,
        status,
        token,
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
  const updateFullname = async (requestData, userToken) => {
    const { data, token, message, status } = await RequestHandler.put(
      __ENDPOINTS.UPDATE_FULLNAME_URL,
      requestData,
      userToken
    );

    if (token !== undefined && token !== null) {
      return {
        data,
        message,
        status,
        token,
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
  const updateAdress = async (requestData, userToken) => {
    const { data, token, message, status } = await RequestHandler.put(
      __ENDPOINTS.UPDATE_ADDRESS_URL,
      requestData,
      userToken
    );

    if (token !== undefined && token !== null) {
      return {
        data,
        message,
        status,
        token,
      };
    } else {
      return {
        message,
        status,
      };
    }
  };

  return (
    <AdminContext.Provider
      value={{
        admins,
        addAdmin,
        getAdmins,
        blockAdmin,
        updateAdress,
        updatePassword,
        updateFullname,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
