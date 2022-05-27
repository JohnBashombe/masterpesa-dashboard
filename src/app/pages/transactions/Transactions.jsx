import React from 'react';

import AppTopScreen from '../__AppTopScreen';

import avatar from '../../../assets/avatar/defaultAvatar.svg';

const Transactions = () => {
  return <AppTopScreen screen={<TransactionPanel />} />;
};

export default Transactions;

const TransactionPanel = () => {
  return (
    <div className='my-4 mx-4 md:mx-10 flex flex-col'>
      <p className='text-base md:text-lg text-black font-bold uppercase my-2'>
        Transactions
      </p>
      <div className='flex flex-col my-4 space-y-3'>
        <Record />
        <Record />
        <Record />
      </div>
    </div>
  );
};

const Record = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between shadow space-y-2 md:space-y-0 md:h-24 py-2 px-4 rounded-2xl border-[1px] border-gray-100'>
      <div className='flex flex-row items-center justify-center bg-gray-100 p-3 rounded-full shadow'>
        <img src={avatar} alt='avatar' className='w-8 h-8' />
      </div>
      <p className='text-sm text-gray-400 font-medium'>Send</p>
      <p className='text-sm text-gray-400 font-medium'>12:42:00 PM</p>
      <p className='text-sm text-gray-400 font-medium'>$1200.00</p>
      <p className='text-sm text-gray-400 font-medium'>Completed</p>
      <div className='bg-green-700/50 p-3 w-full md:w-auto'>
        <p className='text-white text-center font-bold text-xs uppercase'>
          Completed
        </p>
      </div>
    </div>
  );
};
