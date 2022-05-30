import React, { useState } from 'react';

import AppTopScreen from '../__AppTopScreen';

import { Alert } from '../../components/index';
import { tanzania } from '../../../assets/index';

import { AiOutlineLoading } from 'react-icons/ai';
import { IoIosArrowDown, IoIosAdd } from 'react-icons/io';

import { useAdminContext, useAuthContext } from '../../__context/index';

const AddAdmin = () => {
  return <AppTopScreen screen={<Panel />} />;
};

export default AddAdmin;

const Panel = () => {
  const { addAdmin } = useAdminContext();
  const { _auth } = useAuthContext();

  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [address, setAddress] = useState(null);
  const [password, setPassword] = useState(null);
  const [role, setRole] = useState('2');

  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const add = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (!email) {
      setError('Email required.');
      setSuccess(null);
      setLoading(false);
    } else if (!phone) {
      setError('Phone required.');
      setSuccess(null);
      setLoading(false);
    } else if (!firstname) {
      setError('First name required.');
      setSuccess(null);
      setLoading(false);
    } else if (!lastname) {
      setError('Last name required.');
      setSuccess(null);
      setLoading(false);
    } else if (!address) {
      setError('Address required.');
      setSuccess(null);
      setLoading(false);
    } else if (!password) {
      setError('Address required.');
      setSuccess(null);
      setLoading(false);
    } else {
      setError(null);
      setSuccess(null);

      const { message } = await addAdmin(
        {
          role: role,
          email: email,
          address: address,
          phonenumber: phone,
          password: password,
          fullname: firstname + ' ' + lastname,
        },
        _auth !== null && _auth !== undefined ? _auth.token : null
      );

      if (message === 'created') {
        setError(null);
        setSuccess('Created.');

        setPhone(null);
        setEmail(null);
        setFirstname(null);
        setLastname(null);
        setPassword(null);
        setAddress(null);
        setRole('2');
      } else {
        setError(message);
        setSuccess(null);
      }

      setLoading(false);
    }
  };

  return (
    <>
      <Alert
        error={error}
        success={success}
        setError={setError}
        setSuccess={setSuccess}
      />

      <form onSubmit={add}>
        <div className='w-full flex flex-row items-center justify-center xl:justify-start'>
          <div className='flex flex-row items-start justify-between w-full xl:w-3/6'>
            <div className='my-4 mx-4 lg:mx-10 flex flex-col h-full w-full'>
              <p className='text-sm md:text-lg font-bold text-gray-700'>
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
                      value={email ? email : ''}
                      onChange={(e) => setEmail(e.target.value)}
                      className='my-2 w-full text-xs placeholder:text-xs border-[1px] border-gray-200 px-2 h-11 rounded-md'
                    />
                  </div>
                </div>
                <hr className='bg-gray-200 my-4' />
                <div className='flex flex-col my-2'>
                  <p className='text-xs md:text-sm font-bold text-gray-700'>
                    Phone Number
                  </p>
                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center space-x-1 border-y-[1px] border-l-[1px] border-gray-200 h-11 px-2 rounded-tl-md rounded-bl-md'>
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
                      value={phone ? phone : ''}
                      onChange={(e) => setPhone(e.target.value)}
                      className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-200 px-2 h-11 rounded-tr-md rounded-br-md'
                    />
                  </div>
                </div>
                <hr className='bg-gray-200 my-4' />
                <div className='flex flex-col my-2'>
                  <p className='text-xs md:text-sm font-bold text-gray-700'>
                    Names
                  </p>
                  <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex flex-col w-full'>
                      <input
                        type='text'
                        placeholder='First name'
                        value={firstname ? firstname : ''}
                        onChange={(e) => setFirstname(e.target.value)}
                        className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-200 px-2 h-11 rounded-md'
                      />
                      <input
                        type='text'
                        placeholder='Last name'
                        value={lastname ? lastname : ''}
                        onChange={(e) => setLastname(e.target.value)}
                        className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-200 px-2 h-11 rounded-md'
                      />
                    </div>
                  </div>
                </div>
                <hr className='bg-gray-200 my-4' />
                <div className='flex flex-col my-2'>
                  <p className='text-xs md:text-sm font-bold text-gray-700'>
                    Address
                  </p>
                  <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex flex-col w-full'>
                      <input
                        type='text'
                        placeholder='address'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                        className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-200 px-2 h-11 rounded-md'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col my-2'>
                  <p className='text-xs md:text-sm font-bold text-gray-700'>
                    Password
                  </p>
                  <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex flex-col w-full'>
                      <input
                        type='password'
                        placeholder='Password'
                        value={password ? password : ''}
                        onChange={(e) => setPassword(e.target.value)}
                        className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-200 px-2 h-11 rounded-md'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col my-2'>
                  <p className='text-xs md:text-sm font-bold text-gray-700'>
                    Role
                  </p>
                  <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='flex flex-col w-full'>
                      <select
                        name='role'
                        onChange={(e) => setRole(e.target.value)}
                        className='h-11 my-2 px-2 border-[1px] border-gray-200 rounded-md '
                      >
                        <option value='2'>Admin</option>
                        <option value='1'>Sys Admin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center my-4'>
                  <button
                    type={loading ? 'button' : 'submit'}
                    className='flex w-full lg:w-auto min-w-[220px] items-center justify-center px-5 text-xs rounded-md bg-primary text-white font-bold h-11'
                  >
                    {loading ? (
                      <AiOutlineLoading className='w-4 h-4 mx-5 animate-spin' />
                    ) : (
                      <>
                        <IoIosAdd className='w-6 h-6 text-white' />
                        <p>Add Admin</p>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
