import React, { createContext, useContext, useState } from 'react';

import __ENDPOINTS from '../___api/endpoints';
import RequestHandler from '../___api/requestHandler';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [_auth, setAuth] = useState(null);

  /**
   * @author Ntavigwa Bashombe
   * @param {*} data
   * @returns
   */
  const _authPass = async (requestData, userToken) => {
    const { data, message, status } = await RequestHandler.post(
      __ENDPOINTS.LOGIN_PASSWORD_URL,
      requestData,
      userToken
    );

    if (data !== undefined && data !== null) {
      setAuth(data);
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
  const _authEmail = async (requestData, userToken) => {
    const { data, token, message, status } = await RequestHandler.post(
      __ENDPOINTS.LOGIN_EMAIL_URL,
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
   * Should log out the admin
   */
  const logOut = async () => {
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ _auth, _authEmail, _authPass, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
