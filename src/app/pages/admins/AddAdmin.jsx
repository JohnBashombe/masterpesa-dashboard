import React from 'react';

import AppTopScreen from '../__AppTopScreen';

import { tanzania } from '../../../assets/index';
import { IoIosArrowDown, IoIosAdd } from 'react-icons/io';

const AddAdmin = () => {
  return <AppTopScreen screen={<Panel />} />;
};

export default AddAdmin;

const Panel = () => {
  return (
    <div className='w-full flex flex-row items-center justify-center xl:justify-start'>
      <div className='flex flex-row items-start justify-between w-full xl:w-3/6'>
        <div className='my-4 mx-4 md:mx-10 flex flex-col h-full w-full'>
          <p className='text-base md:text-lg font-bold text-gray-700'>
            Add New Admin
          </p>
          <p className='text-xs md:text-sm text-gray-400 font-medium mt-1 mb-3'>
            Add Admin personal details here.
          </p>

          <div className='flex flex-col py-2 px-6 my-4 border-2 border-gray-100 h-full'>
            <p className='font-bold text-sm mt-2 mb-6 text-gray-700'>
              Personal Information
            </p>
            <div className='flex flex-col my-2'>
              <p className='text-xs md:text-sm font-bold text-gray-700'>
                Email Address
              </p>
              <div className='flex flex-col md:flex-row items-center justify-between'>
                <input
                  type='email'
                  placeholder='Email Address'
                  className='my-2 w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                />
              </div>
            </div>
            <hr className='bg-gray-100 my-4' />
            <div className='flex flex-col my-2'>
              <p className='text-xs md:text-sm font-bold text-gray-700'>
                Phone Number
              </p>
              <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center space-x-1 border-y-[1px] border-l-[1px] border-gray-100 h-11 px-2 rounded-tl-md rounded-bl-md'>
                  <img
                    src={tanzania}
                    className='w-10 h-9 rounded-full'
                    alt='flag'
                  />
                  <p className='text-xs font-normal text-gray-500'>+255</p>
                  <IoIosArrowDown className='w-8 h-8 text-gray-700' />
                </div>
                <input
                  type='tel'
                  placeholder='Phone number'
                  className='my-2 w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-tr-md rounded-br-md'
                />
              </div>
            </div>
            <hr className='bg-gray-100 my-4' />
            <div className='flex flex-col my-2'>
              <p className='text-xs md:text-sm font-bold text-gray-700'>
                Names
              </p>
              <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col w-full'>
                  <input
                    type='text'
                    placeholder='First name'
                    className='my-2 w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                  />
                  <input
                    type='text'
                    placeholder='Last name'
                    className='my-2 w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                  />
                </div>
              </div>
            </div>
            <hr className='bg-gray-100 my-4' />
            <div className='flex flex-col my-2'>
              <p className='text-xs md:text-sm font-bold text-gray-700'>
                Address
              </p>
              <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col w-full'>
                  <input
                    type='text'
                    placeholder='address'
                    className='my-2 w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center my-4'>
              <button className='flex w-full lg:w-auto min-w-[220px] items-center justify-center px-5 text-xs rounded-md bg-primary text-white font-bold h-11'>
                <IoIosAdd className='w-6 h-6 text-white' />
                <p>Add Admin</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
