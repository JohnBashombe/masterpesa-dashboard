/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { Navigate } from 'react-router-dom';

import AppTopScreen from '../__AppTopScreen';

import { avatar } from '../../../assets/index';
import { Alert, DeleteModal } from '../../components/index';

import { AiOutlineDelete } from 'react-icons/ai';

import { useAuthContext, useUserContext } from '../../__context/index';

const Users = () => {
  const { _auth } = useAuthContext();
  const { users, getUsers } = useUserContext();
  const [userLocals, setUserLocals] = useState(null);

  useEffect(() => {
    if (!users && _auth !== null) getUsers(_auth.token);
    else setUserLocals(users);
  }, [users]);

  if (!_auth) return <Navigate replace to='/login' />;

  return <AppTopScreen screen={<UserPanel user={userLocals} />} />;
};

export default Users;

const UserPanel = ({ user }) => {
  const [id, setID] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  if (user === null || user === undefined) {
    return (
      <div className='flex justify-center items-center py-10 animate-pulse'>
        <span className='text-sm font-bold text-primary uppercase'>
          Loading...
        </span>
      </div>
    );
  } else if (user.length === 0) {
    return (
      <div className='flex flex-col w-full justify-center items-center py-10 px-4 md:px-10'>
        <span className='text-sm my-10 font-bold text-primary uppercase'>
          No User Found
        </span>
      </div>
    );
  }

  return (
    <>
      <DeleteModal
        id={id}
        type={'user'}
        name={selected}
        showModal={showModal}
        setShowModal={setShowModal}
        setError={setError}
        setSuccess={setSuccess}
      />
      <Alert
        error={error}
        success={success}
        setError={setError}
        setSuccess={setSuccess}
      />
      <div className='my-4 mx-4 md:mx-10 flex flex-col'>
        <div className='flex flex-row items-center justify-between border-2 border-gray-100 rounded-md px-4 py-3'>
          <p className='text-base md:text-lg text-black font-bold uppercase my-2'>
            Users Management
          </p>
        </div>
        <div className='flex flex-col my-4 space-y-3'>
          {user.map((_user_, index) => {
            return (
              <Data
                key={index}
                setID={setID}
                role={_user_.role}
                admin_id={_user_.id}
                email={_user_.email}
                block={_user_.status}
                profile={_user_.avatar}
                setSelected={setSelected}
                deleted={_user_.available}
                phone={_user_.phonenumber}
                fullname={_user_.fullname}
                setShowModal={setShowModal}
                created_at={_user_.created_at}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const Data = ({
  role,
  email,
  block,
  phone,
  setID,
  profile,
  deleted,
  fullname,
  admin_id,
  created_at,
  setSelected,
  setShowModal,
}) => {
  return (
    <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center w-full p-2 rounded-2xl border-[1px] border-gray-100'>
      <div className='flex flex-row items-center justify-center bg-gray-100 p-4 rounded-full'>
        <img
          src={profile !== null ? profile : avatar}
          alt='avatar'
          className='w-8 h-8'
        />
      </div>
      <div className='flex flex-col space-y-2 md:py-2 px-4 space-x-8'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <p
            className={
              'mx-5 text-base font-bold ' +
              (fullname ? 'text-gray-900' : 'text-red-700/70')
            }
          >
            {fullname ? fullname : 'No Name Yet.'}
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between space-x-3'>
          <p className='text-sm text-gray-400 font-medium'>
            {role === 1 ? 'User' : 'Agent'}
          </p>
          <p className='text-sm text-gray-400 font-medium'>{created_at}</p>
          <p className='text-sm text-gray-400 font-medium'>
            {block === 1 ? 'Active' : 'Blocked'}
          </p>
          <p className='text-sm text-gray-400 font-medium'>
            {deleted === 1 ? 'Available' : 'Deleted'}
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <p className='text-sm font-bold text-gray-700'>{phone}</p>
          <p
            className={
              'mx-5 text-sm font-bold ' +
              (email ? 'text-gray-700' : 'text-red-700/70')
            }
          >
            {email ? email : 'No Email Yet.'}
          </p>
        </div>
      </div>
      <div className='w-full md:w-auto flex justify-center items-center p-3 cursor-pointer'>
        <button
          className={
            'flex items-center justify-center space-x-2 w-full md:w-auto px-3 text-xs rounded-md text-white font-bold h-10 ' +
            (block === 0 || deleted === 0
              ? 'bg-yellow-700/70 cursor-not-allowed'
              : 'bg-red-700/70 cursor-pointer')
          }
          onClick={
            block === 0 || deleted === 0
              ? null
              : () => {
                  setID(admin_id);
                  setShowModal(true);
                  setSelected(phone);
                }
          }
        >
          <AiOutlineDelete className='w-5 h-5' />
          {block === 0 || deleted === 0 ? (
            <span> Block/Deleted </span>
          ) : (
            <>
              <p>Block Account</p>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
