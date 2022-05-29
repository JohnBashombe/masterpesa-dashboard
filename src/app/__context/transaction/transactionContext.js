import React, { createContext, useContext, useState } from 'react';

import __ENDPOINTS from '../___api/endpoints';
import RequestHandler from '../___api/requestHandler';

const TransactionContext = createContext();
export const useTransactionContext = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(null);
  /**
   * @author Ntavigwa Bashombe
   * @param {*} data
   * @returns
   */
  const get = async (userToken) => {
    const { data, message, status } = await RequestHandler.get(
      __ENDPOINTS.TRANSACTIONS_URL,
      userToken
    );

    if (data !== undefined && data !== null) {
      setTransactions(data);
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
    <TransactionContext.Provider value={{ transactions, get }}>
      {children}
    </TransactionContext.Provider>
  );
};
