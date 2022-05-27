import React from 'react';

import { avatar, tanzania, masterPesaLogo } from '../../../assets/assets';

import { GiSpeaker } from 'react-icons/gi';
import { FcGoogle } from 'react-icons/fc';
import { FaMicrophoneSlash, FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoMdMore, IoIosAdd, IoIosArrowDown } from 'react-icons/io';
import {
  AiFillCloseCircle,
  AiFillStepForward,
  AiFillEyeInvisible,
} from 'react-icons/ai';

const Login = () => {
  return (
    <div className='bg-white lg:bg-brand flex h-full flex-col px-4 xl:px-20'>
      <div className='flex flex-col justify-center items-center border-2 border-gray-100 rounded-lg lg:rounded-none lg:border-0 mt-4 lg:py-5'>
        <div className='relative hidden lg:flex flex-col justify-center items-center'>
          <p className='text-5xl text-gray-700 font-medium'>Welcome back</p>
          <p className='text-sm text-gray-700 mt-2'>
            Join the world's largest community
          </p>
          <div
            className='absolute -right-40 top-0 bg-white w-10 py-4 flex flex-col items-center
           justify-between rounded-xl px-2'
          >
            <FaMicrophoneSlash className='text-secondary w-5 h-5' />
            <div className='w-full h-[1px] bg-gray-300 rounded-xl mx-2 my-1'></div>
            <GiSpeaker className='text-primary w-6 h-6' />
          </div>
        </div>
        <div className='flex flex-col my-8 w-full'>
          <div className='hidden lg:flex flex-col mx-auto space-x-5'>
            <p className='font-bold text-sm text-gray-600 mx-5 my-2'>
              Recent logins
            </p>
            <div className='flex flex-row space-x-5 justify-between items-center w-full'>
              <div className='flex flex-row space-x-4'>
                <UserCard />
                <UserCard />
                <div className='mt-2 flex flex-col justify-between items-center py-3 bg-brand_2 w-28 h-28 rounded-xl shadow-sm'>
                  <div className='bg-brand_3 flex justify-center items-center shadow-2xl rounded-full w-10 h-10'>
                    <IoIosAdd className='w-6 h-6 text-white' />
                  </div>
                  <p className='text-white text-xs font-medium'>Add Account</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-sm font-bold text-gray-800'>Sign Up</p>
                <p className='text-sm font-bold text-gray-800'>Help</p>
              </div>
              <div className='flex flex-col space-y-2'>
                <div className='flex flex-row justify-center items-center bg-secondary/80 w-8 h-8 rounded-lg'>
                  <AiFillStepForward className='w-5 h-5 text-white' />
                </div>
                <p className='text-xs underline text-gray-500 font-bold'>
                  This video will help you to <br /> create a new account
                </p>
              </div>
            </div>
          </div>

          <div className='hidden lg:flex my-10 flex-row justify-between items-center'>
            <div className='w-full h-[2px] bg-gray-300'></div>
            <p className='px-4 text-xl font-bold'>or</p>
            <div className='w-full h-[2px] bg-gray-300'></div>
          </div>

          <div className='flex flex-row justify-center items-center my-5 lg:hidden'>
            <img src={masterPesaLogo} alt='logo' />
          </div>

          <div className='w-full h-full flex flex-col justify-between items-center space-y-4 bg-white py-4 lg:py-16 rounded-xl'>
            <div className='flex flex-col w-full px-4 lg:w-4/6 xl:w-1/2 h-full'>
              <div className='flex flex-col md:flex-row justify-between items-center w-full h-full space-x-5'>
                <div className='flex w-full items-center justify-center'>
                  <div className='flex flex-row items-center space-x-1 border-y-[1px] border-l-[1px] border-gray-100 h-12 px-2 rounded-tl-md rounded-bl-md'>
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
                    className='my-2 w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-12 rounded-tr-md rounded-br-md'
                  />
                </div>

                <div className='relative flex items-center justify-center w-full'>
                  <AiFillEyeInvisible className='absolute right-4 text-gray-400 cursor-pointer' />
                  <input
                    type='password'
                    placeholder='Password'
                    className='my-2 w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-12 rounded-tr-md rounded-br-md'
                  />
                </div>
              </div>

              <div className='flex flex-col md:flex-row items-center justify-between mx-auto w-full my-4'>
                <div className='flex space-x-2 items-center justify-start'>
                  <div className='border-[1px] border-gray-300 w-5 h-5 rounded-md '></div>
                  <p className='font-bold text-xs text-gray-600'>
                    Remember me for 30 days
                  </p>
                </div>
                <p className='font-bold text-xs text-gray-600 underline decoration-primary'>
                  Forgot password
                </p>
              </div>

              <div className='flex flex-col items-center justify-center w-full space-y-4'>
                <div className='flex flex-col space-y-4 mb-3 w-full lg:w-auto'>
                  <button className='bg-primary w-full lg:w-1/3 xl:w-1/4 min-w-[280px] shadow px-4 py-3 text-white font-bold rounded-md text-xs'>
                    Sign In
                  </button>
                  <button className='bg-brand_4 w-full lg:w-1/3 xl:w-1/4 min-w-[280px] shadow px-4 py-3 text-white font-bold rounded-md text-xs'>
                    Create New Account
                  </button>
                </div>

                <div className='flex w-full flex-row justify-between items-center'>
                  <div className='w-full h-[2px] bg-gray-300'></div>
                  <div className='w-96 flex flex-row justify-center items-center'>
                    <p className='px-2 text-xs font-bold'>Or continue with</p>
                  </div>
                  <div className='w-full h-[2px] bg-gray-300'></div>
                </div>
                <div className='flex justify-center items-center space-x-5 py-2'>
                  <FcGoogle className='w-6 h-6' />
                  <FaFacebook className='text-facebook w-5 h-5' />
                  <FaTwitter className='text-twitter w-5 h-5' />
                </div>
                <div className='text-gray-50 font-normal'>
                  <span className='text-xs text-gray-500'>
                    By Clicking the buttons above,you agree to our{' '}
                  </span>
                  <span className='text-xs text-primary font-bold underline decoration-primary'>
                    terms of use{' '}
                  </span>
                  <span className='text-xs text-gray-500'>and {'  '}</span>
                  <span className='text-xs text-primary font-bold underline decoration-primary'>
                    privacy policies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const UserCard = () => {
  return (
    <div className='bg-white/80 w-28 h-28 shadow-sm flex flex-col items-center justify-between px-3 py-3 mt-2 rounded-xl'>
      <div className='flex flex-row items-start justify-between w-full space-x-2'>
        <AiFillCloseCircle className='h-4 w-4 text-secondary' />
        <div className='flex flex-row w-10 h-10 justify-center items-center bg-primary/30 p-[2px] rounded-full'>
          <img src={avatar} alt='avatar' className='w-6 h-6' />
        </div>
        <IoMdMore className='h-4 w-4 text-black' />
      </div>
      <p className='my-2 text-xs font-bold text-gray-700'>J. Bashombe</p>
    </div>
  );
};
