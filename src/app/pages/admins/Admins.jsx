import React from 'react';

import { Link } from 'react-router-dom';

import AppTopScreen from '../__AppTopScreen';

import { avatar } from '../../../assets/assets';

import { IoIosAdd } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';

import { __ROUTES } from '../../features/__Routes/__Routes';

const Admins = () => {
  return <AppTopScreen screen={<Panel />} />;
};

export default Admins;

const Panel = () => {
  return (
    <div className='my-4 mx-4 md:mx-10 flex flex-col'>
      <div className='flex flex-row items-center justify-between border-2 border-gray-100 rounded-md px-4 py-3'>
        <p className='text-base md:text-lg text-black font-bold uppercase my-2'>
          Admins Management
        </p>
        <Link to={__ROUTES.ADD_ADMIN.route}>
          <button className='flex items-center justify-start w-auto px-5 text-xs rounded-md bg-primary text-white font-bold h-10'>
            <IoIosAdd className='w-6 h-6 text-white' />
            <p>Add Admin</p>
          </button>
        </Link>
      </div>
      <div className='flex flex-col my-4 space-y-3'>
        <Data />
        <Data />
        <Data />
        <Data />
      </div>
    </div>
  );
};

const Data = () => {
  return (
    <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center w-full p-2 rounded-2xl border-[1px] border-gray-100'>
      <div className='flex flex-row items-center justify-center bg-gray-100 p-4 rounded-full'>
        <img src={avatar} alt='avatar' className='w-8 h-8' />
      </div>
      <div className='flex flex-col space-y-2 md:py-2 px-4 space-x-8'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <p className='text-sm text-gray-400 font-medium'>Sys Admin</p>
          <p className='text-sm text-gray-400 font-medium'>12:42:00 PM</p>
          <p className='text-sm text-gray-400 font-medium'>Active</p>
          <p className='text-sm text-gray-400 font-medium'>Active</p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <p className='text-sm font-bold text-gray-700'>+255 689 324 990</p>
          <p className='mx-5 text-sm font-bold text-gray-700'>
            admin@gmail.com
          </p>
        </div>
      </div>
      <div className='w-full md:w-auto flex justify-center items-center p-3 cursor-pointer'>
        <button className='flex items-center justify-center space-x-2 w-full md:w-auto px-3 text-xs rounded-md bg-red-700/70 text-white font-bold h-10'>
          <AiOutlineDelete className='w-5 h-5' />
          <p>Block Account</p>
        </button>
      </div>
    </div>
  );
};
