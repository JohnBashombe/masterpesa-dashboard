/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { Link, Navigate } from 'react-router-dom';

import AppTopScreen from '../__AppTopScreen';

import { avatar } from '../../../assets/index';
import { Alert, DeleteModal } from '../../components/index';

import { IoIosAdd } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';

import { __ROUTES } from '../../features/index';

import { useAuthContext, useAdminContext } from '../../__context/index';

const Admins = () => {
  const { _auth } = useAuthContext();
  const { admins, getAdmins } = useAdminContext();
  const [locals, setLocals] = useState(null);

  useEffect(() => {
    if (!admins && _auth !== null) getAdmins(_auth.token);
    else setLocals(admins);
  }, [admins]);

  if (!_auth) return <Navigate replace to='/login' />;

  return <AppTopScreen screen={<Panel data={locals} />} />;
};

export default Admins;

const Panel = ({ data }) => {
  const [id, setID] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  if (data === null || data === undefined) {
    return (
      <div className='flex justify-center items-center py-10 animate-pulse'>
        <span className='text-sm font-bold text-primary uppercase'>
          Loading...
        </span>
      </div>
    );
  } else if (data.length === 0) {
    return (
      <div className='flex flex-col w-full justify-center items-center py-10 px-4'>
        <div className='w-full flex flex-row items-center justify-between border-2 border-gray-100 rounded-md px-4 py-3'>
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
        <span className='text-sm my-10 font-bold text-primary uppercase'>
          No Admin Found
        </span>
      </div>
    );
  }
  return (
    <>
      <DeleteModal
        id={id}
        type={'admin'}
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
      <div className='my-4 px-4 flex flex-col items-center justify-center w-auto'>
        <div className='flex flex-col w-full space-y-1 md:space-y-0 md:flex-row md:items-center justify-between border-2 border-gray-100 rounded-md px-4 py-3'>
          <p className='text-sm md:text-lg text-black font-bold uppercase my-2'>
            Admins Management
          </p>
          <Link to={__ROUTES.ADD_ADMIN.route}>
            <button className='flex items-center justify-center w-full md:w-auto px-4 text-xs rounded-md bg-primary text-white font-bold h-10'>
              <IoIosAdd className='h-4 w-4 md:w-6 md:h-6 text-white' />
              <p className='text-xs md:text-sm'>Add Admin</p>
            </button>
          </Link>
        </div>
        <div className='flex w-full md:w-auto flex-col my-4 space-y-3 '>
          {data.map((_admin_, index) => {
            return (
              <Data
                key={index}
                setID={setID}
                role={_admin_.role}
                admin_id={_admin_.id}
                email={_admin_.email}
                block={_admin_.status}
                profile={_admin_.avatar}
                setSelected={setSelected}
                deleted={_admin_.available}
                phone={_admin_.phonenumber}
                fullname={_admin_.fullname}
                setShowModal={setShowModal}
                created_at={_admin_.created_at}
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
          <p className='mx-5 text-base font-bold text-gray-900'>{fullname}</p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between space-x-3'>
          <p className='text-sm text-gray-400 font-medium'>
            {role === 1 ? 'Sys Admin' : 'Admin'}
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
          <p className='mx-5 text-sm font-bold text-gray-700'>{email}</p>
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
                  setSelected(fullname);
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
