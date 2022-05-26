import React from 'react';

import { BiRefresh } from 'react-icons/bi';
import {
  IoIosArrowDown,
  IoMdNotificationsOutline,
  IoIosHelpCircleOutline,
} from 'react-icons/io';

import avatar from '../../../../assets/avatar/defaultAvatar.svg';

const TopBar = () => {
  return (
    <div className='flex flex-row items-center justify-between py-4 px-10 w-full border-b-2 border-gray-200'>
      <div className='flex flex-col space-y-1'>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-2xl font-bold text-black'>Dashboard</p>
          <BiRefresh className='w-6 h-6 text-gray-900 ml-1' />
        </div>
        <div className='flex flex-row justify-start items-center'>
          <p className='text-sm text-gray-600 font-normal'>Financial</p>
          <IoIosArrowDown className='ml-2 w-4 h-4 text-black' />
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-3'>
        <div className='shadow-md rounded-full p-2 cursor-pointer'>
          <IoIosHelpCircleOutline className='w-7 h-7' />
        </div>
        <div className='shadow-md rounded-full p-2 cursor-pointer'>
          <IoMdNotificationsOutline className='w-7 h-7' />
        </div>
        <div className='bg-gray-200 rounded-full flex items-center justify-center p-2 cursor-pointer'>
          <img src={avatar} className='w-7 h-7' alt='avatar' />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
