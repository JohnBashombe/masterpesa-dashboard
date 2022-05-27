import React from 'react';

import { BiRefresh } from 'react-icons/bi';
import {
  IoIosArrowDown,
  IoMdNotificationsOutline,
  IoIosHelpCircleOutline,
} from 'react-icons/io';
import { Link } from 'react-router-dom';

import { avatar } from '../../../../assets/assets';
import { __ROUTES } from '../../../features/__Routes/__Routes';

const TopBar = () => {
  return (
    <div className='flex flex-row items-center justify-between py-4 px-4 md:px-10 w-full border-b-2 border-gray-200'>
      <div className='flex flex-col space-y-1'>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-base md:text-xl font-bold text-black'>Dashboard</p>
          <BiRefresh className='w-5 h-5 text-gray-900 ml-1' />
        </div>
        <div className='flex flex-row justify-start items-center'>
          <p className='text-xs md:text-sm text-gray-600 font-normal'>
            Financial
          </p>
          <IoIosArrowDown className='ml-2 w-3 h-3 md:w-4 md:h-4 text-black' />
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-3'>
        <div className='shadow-md rounded-full p-2 cursor-pointer'>
          <IoIosHelpCircleOutline className='w-6 h-6 md:w-7 md:h-7' />
        </div>
        <div className='shadow-md rounded-full p-2 cursor-pointer'>
          <IoMdNotificationsOutline className='w-6 h-6 md:w-7 md:h-7' />
        </div>
        <Link to={__ROUTES.LOGIN.route}>
          <div className='bg-gray-200 rounded-full flex items-center justify-center p-2 cursor-pointer'>
            <img src={avatar} className='w-5 h-5 md:w-7 md:h-7' alt='avatar' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
