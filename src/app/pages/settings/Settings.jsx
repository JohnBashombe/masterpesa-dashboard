import React from 'react';

import AppTopScreen from '../__AppTopScreen';

import { IoIosArrowDown } from 'react-icons/io';
import { tanzania, avatar } from '../../../assets/index';

const Settings = () => {
  return <AppTopScreen screen={<SettingsPanel />} />;
};

export default Settings;

const SettingsPanel = () => {
  return (
    <div className='w-full flex flex-row items-center justify-center xl:justify-start'>
      <div className='flex flex-row items-start justify-between w-full xl:w-3/6'>
        <div className='my-4 mx-4 md:mx-10 flex flex-col h-full w-full'>
          <p className='text-base md:text-lg font-bold text-gray-700'>
            General Settings
          </p>
          <p className='text-xs md:text-sm text-gray-400 font-medium mt-1 mb-3'>
            Update your photo personal details here.
          </p>

          <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center border-2 border-gray-100'>
            <div className='flex flex-col px-4 py-6'>
              <p className='font-bold text-gray-900 text-sm md:text-base'>
                Your Photo
              </p>
              <div className='flex flex-row mt-4'>
                <div className='flex p-2 bg-gray-200 items-center justify-center rounded-full'>
                  <img src={avatar} alt='avatar' className='w-8 h-8' />
                </div>
                <div className='flex flex-col mx-4 space-y-2 md:space-y-1'>
                  <p className='text-xs md:text-sm font-bold text-gray-900'>
                    Edit your photo
                  </p>
                  <div className='flex flex-row space-x-3'>
                    <p className='text-sm text-gray-400 font-medium'>Delete</p>
                    <p className='text-sm text-secondary font-medium'>Update</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col mb-4 md:my-4 px-4 w-full md:w-auto space-y-2 items-center'>
              <button className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary text-white font-bold h-11'>
                Update
              </button>
            </div>
          </div>

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
                <button className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary text-white font-bold h-11'>
                  Update
                </button>
              </div>
            </div>
            <hr className='bg-gray-100 my-4' />
            <div className='flex flex-col my-2'>
              <p className='text-xs md:text-sm font-bold text-gray-700'>
                Phone Number
              </p>
              <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-row items-center justify-between w-full'>
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
                <button className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary text-white font-bold h-11'>
                  Update
                </button>
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
                <button className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary text-white font-bold h-11'>
                  Update
                </button>
              </div>
            </div>
            <hr className='bg-gray-100 my-4' />
            <div className='flex flex-col my-2'>
              <p className='text-xs md:text-sm font-bold text-gray-700'>
                Address & Map
              </p>
              <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col w-full'>
                  <input
                    type='text'
                    placeholder='address'
                    className='my-2 w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                  />
                  <textarea
                    type='text'
                    placeholder='map'
                    className='my-2 w-full placeholder:text-xs border-[1px] border-gray-100 p-2 h-20 rounded-md'
                  />
                </div>
                <button className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary text-white font-bold h-11'>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
