/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import AppTopScreen from '../__AppTopScreen';

import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineLoading } from 'react-icons/ai';
import { tanzania, avatar } from '../../../assets/index';

import { useAuthContext, useAdminContext } from '../../__context/index';

import { Navigate } from 'react-router-dom';
import { Alert } from '../../components/index';

const Settings = () => {
  return <AppTopScreen screen={<SettingsPanel />} />;
};

export default Settings;

const SettingsPanel = () => {
  const { _auth, logOut } = useAuthContext();
  const { updateAdress, updatePassword, updateFullname } = useAdminContext();

  const [email, setEmail] = useState(_auth ? _auth.email : null);
  const [phone, setPhone] = useState(_auth ? _auth.phonenumber : null);

  const fullname = _auth ? _auth.fullname.split(' ') : null;
  const [firstname, setFirstName] = useState(fullname ? fullname[0] : null);
  const [lastname, setLastname] = useState(fullname ? fullname[1] : null);

  const [map, setMap] = useState(_auth ? _auth.map : null);
  const [address, setAddress] = useState(_auth ? _auth.address : null);

  const [new_password, setNewPassword] = useState(null);
  const [old_password, setOldPassword] = useState(null);

  // useEffect(() => {
  //   if (!users && _auth !== null) getUsers(_auth.token);
  //   else setUserLocals(users);
  // }, [users]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [loadPass, setLoadPass] = useState(null);
  const [loadName, setLoadName] = useState(null);
  const [loadAddress, setLoadAddress] = useState(null);

  const updatePass = async () => {
    setLoadPass(true);

    if (!old_password) {
      setError('Old Password required.');
      setSuccess(null);
      setLoadPass(false);
    } else if (!new_password) {
      setError('New Password required.');
      setSuccess(null);
      setLoadPass(false);
    } else {
      setError(null);
      setSuccess(null);

      const { message } = await updatePassword(
        {
          old_password: old_password,
          new_password: new_password,
        },
        _auth !== null && _auth !== undefined ? _auth.token : null
      );

      if (message === 'logged out') {
        setError(null);
        setSuccess(null);
        // log  the admin out
        await logOut();
      } else {
        setError(message);
        setSuccess(null);
      }

      setLoadPass(false);
    }
  };

  const updateAddr = async () => {
    setLoadAddress(true);

    if (!address) {
      setError('Address required.');
      setSuccess(null);
      setLoadAddress(false);
    } else if (!map) {
      setError('Map required.');
      setSuccess(null);
      setLoadAddress(false);
    } else {
      setError(null);
      setSuccess(null);

      const { message } = await updateAdress(
        {
          address: address,
          map: map,
        },
        _auth !== null && _auth !== undefined ? _auth.token : null
      );

      if (message === 'success') {
        setError(null);
        setSuccess('Success');
      } else {
        setError(message);
        setSuccess(null);
      }

      setLoadAddress(false);
    }
  };

  const updateFull = async () => {
    setLoadName(true);

    if (!firstname) {
      setError('First Name required.');
      setSuccess(null);
      setLoadName(false);
    }
    if (!lastname) {
      setError('Last Name required.');
      setSuccess(null);
      setLoadName(false);
    } else {
      setError(null);
      setSuccess(null);

      const { message } = await updateFullname(
        {
          firstname: firstname,
          lastname: lastname,
        },
        _auth !== null && _auth !== undefined ? _auth.token : null
      );

      if (message === 'success') {
        setError(null);
        setSuccess('Success');
      } else {
        setError(message);
        setSuccess(null);
      }

      setLoadName(false);
    }
  };

  if (!_auth) return <Navigate replace to='/login' />;

  return (
    <>
      <Alert
        error={error}
        success={success}
        setError={setError}
        setSuccess={setSuccess}
      />

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
                      <p className='text-sm text-gray-400 font-medium'>
                        Delete
                      </p>
                      <p className='text-sm text-secondary font-medium'>
                        Update
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col mb-4 md:my-4 px-4 w-full md:w-auto space-y-2 items-center'>
                <button className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary/60 cursor-not-allowed text-white font-bold h-11'>
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
                    value={email ? email : ''}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email Address'
                    disabled={true}
                    className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                  />
                  <button className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary/60 text-white font-bold h-11'>
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
                      value={phone ? phone : ''}
                      disabled={true}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder='Phone number'
                      className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-tr-md rounded-br-md'
                    />
                  </div>
                  <button className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary/60 text-white font-bold h-11'>
                    Update
                  </button>
                </div>
              </div>
              <hr className='bg-gray-100 my-4' />
              <div className='flex flex-col my-2'>
                <p className='text-xs md:text-sm font-bold text-gray-700'>
                  Full name
                </p>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                  <div className='flex flex-col w-full'>
                    <input
                      type='text'
                      placeholder='First name'
                      value={firstname ? firstname : ''}
                      onChange={(e) => setFirstName(e.target.value)}
                      className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                    />
                    <input
                      type='text'
                      placeholder='Last name'
                      value={lastname ? lastname : ''}
                      onChange={(e) => setLastname(e.target.value)}
                      className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                    />
                  </div>
                  <button
                    className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary text-white font-bold h-11'
                    onClick={loadName ? null : () => updateFull()}
                  >
                    {loadName ? (
                      <AiOutlineLoading className='w-4 h-4 mx-3 animate-spin' />
                    ) : (
                      <p>Update</p>
                    )}
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
                      value={address ? address : ''}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder='address'
                      className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                    />
                    <textarea
                      type='text'
                      placeholder='map'
                      value={map ? map : ''}
                      onChange={(e) => setMap(e.target.value)}
                      className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-100 p-2 h-20 rounded-md'
                    />
                  </div>
                  <button
                    className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary text-white font-bold h-11'
                    onClick={loadAddress ? null : () => updateAddr()}
                  >
                    {loadAddress ? (
                      <AiOutlineLoading className='w-4 h-4 mx-3 animate-spin' />
                    ) : (
                      <p>Update</p>
                    )}
                  </button>
                </div>
              </div>
              <hr className='bg-gray-100 my-4' />
              <div className='flex flex-col my-2'>
                <p className='text-xs md:text-sm font-bold text-gray-700'>
                  Password
                </p>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                  <div className='flex flex-col w-full'>
                    <input
                      type='old_password'
                      value={old_password ? old_password : ''}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder='Old password'
                      className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                    />
                    <input
                      type='new_password'
                      value={new_password ? new_password : ''}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder='New password'
                      className='my-2 text-xs w-full placeholder:text-xs border-[1px] border-gray-100 px-2 h-11 rounded-md'
                    />
                  </div>
                  <button
                    className='ml-2 w-full md:w-auto px-5 text-xs rounded-md bg-primary text-white font-bold h-11'
                    onClick={loadPass ? null : () => updatePass()}
                  >
                    {loadPass ? (
                      <AiOutlineLoading className='w-4 h-4 mx-3 animate-spin' />
                    ) : (
                      <p>Update</p>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
