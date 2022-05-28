import React from 'react';

import { FiUserPlus } from 'react-icons/fi';
import { IoMdTrendingUp } from 'react-icons/io';

const HomeCard = ({ title, quantity }) => {
  return (
    <div className='flex flex-row justify-between items-start w-full py-5 px-5 border-[1px]'>
      <div className='flex flex-col items-start justify-start space-y-2'>
        <p className='text-base font-bold text-black capitalize'>{title}</p>
        <p className='text-3xl font-bold text-black'>{quantity}</p>
        <div className='flex flex-row justify-start items-center space-x-2 w-full'>
          <IoMdTrendingUp className='w-6 h-6 text-green-500' />
          <p className='text-xs font-bold text-green-500'>200%</p>
          <p className='text-xs text-gray-500'>VS PREV. 28 Days</p>
        </div>
      </div>
      <div className='flex items-center justify-center bg-secondary/10 p-4 rounded-full'>
        <FiUserPlus className='w-6 h-6 text-secondary' />
      </div>
    </div>
  );
};

export default HomeCard;
