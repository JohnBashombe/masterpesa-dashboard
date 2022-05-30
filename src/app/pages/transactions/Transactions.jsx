/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { Navigate } from 'react-router-dom';

import AppTopScreen from '../__AppTopScreen';

import { useTransactionContext, useAuthContext } from '../../__context/index';

const Transactions = () => {
  const { transactions, get } = useTransactionContext();
  const { _auth } = useAuthContext();
  const [locals, setLocals] = useState(null);

  useEffect(() => {
    if (!transactions && _auth !== null) get(_auth.token);
    else setLocals(transactions);
  }, [transactions]);

  if (!_auth) return <Navigate replace to='/login' />;

  return <AppTopScreen screen={<TransactionPanel data={locals} />} />;
};

export default Transactions;

const TransactionPanel = ({ data }) => {
  if (data === null || data === undefined) {
    return (
      <div className='flex justify-center items-center py-10 animate-pulse'>
        <span className='text-sm font-bold text-primary uppercase'>
          Loading...
        </span>
      </div>
    );
  } else if (data.length === 0) {
    return (
      <div className='flex justify-center items-center py-10'>
        <span className='text-sm font-bold text-primary uppercase'>
          No Transaction Found
        </span>
      </div>
    );
  }

  return (
    <div className='my-4 flex flex-col justify-center items-center w-full px-4'>
      <p className='text-sm md:text-lg text-black font-bold uppercase my-2'>
        Transactions
      </p>
      <div className='flex flex-col w-full lg:w-auto my-4 space-y-3 space-x-4'>
        {data.map((tx, index) => {
          return (
            <Record
              key={index}
              type={tx.type}
              amount={tx.amount}
              status={tx.status}
              date={tx.created_at}
            />
          );
        })}
      </div>
    </div>
  );
};

const Record = ({ type, date, amount, status }) => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between shadow space-y-2 space-x-4 md:space-y-0 py-2 px-4 rounded-md border-[1px] border-gray-100'>
      <p className='text-sm text-gray-400 font-medium'>{type}</p>
      <p className='text-sm text-gray-400 font-medium'>{date}</p>
      <p className='text-sm text-gray-400 font-medium'>Tsh {amount}</p>
      <div
        className={
          'p-3 w-full md:w-auto rounded-md ' +
          (status === 1
            ? 'bg-green-700/50'
            : status === 2
            ? 'bg-red-700/50'
            : 'bg-gray-700/50')
        }
      >
        <p className='text-white text-center font-bold text-xs uppercase'>
          {status === 1 ? 'Completed' : status === 2 ? 'Cancelled' : 'Pending'}
        </p>
      </div>
    </div>
  );
};
