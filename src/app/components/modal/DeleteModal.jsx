import React, { useState } from 'react';

import {
  useAuthContext,
  useUserContext,
  useAdminContext,
} from '../../__context/index';

import { AiOutlineLoading } from 'react-icons/ai';

const DeleteModal = ({
  id,
  name,
  type,
  setError,
  showModal,
  setSuccess,
  setShowModal,
}) => {
  const { _auth, logOut } = useAuthContext();
  const { blockUser, getUsers } = useUserContext();
  const { blockAdmin, getAdmins } = useAdminContext();

  const [loading, setLoading] = useState(null);

  const block = async () => {
    setLoading(true);

    if (type === 'admin') {
      const { message } = await blockAdmin(
        {
          admin_id: id,
        },
        _auth ? _auth.token : null
      );

      if (message === 'deleted') {
        if (_auth.id === id) {
          await logOut();
        } else {
          setError(null);
          setSuccess('Deleted.');
        }
        await getAdmins(_auth.token);

        setLoading(false);
        setShowModal(false);
      } else {
        setLoading(false);
        setError(message);
        setSuccess(null);
      }
    } else if (type === 'user') {
      const { message } = await blockUser(
        {
          user_id: id,
        },
        _auth ? _auth.token : null
      );

      if (message === 'deleted') {
        await getUsers(_auth.token);

        setLoading(false);
        setShowModal(false);

        setError(null);
        setSuccess('Deleted.');
      } else {
        setLoading(false);
        setError(message);
        setSuccess(null);
      }
    }
  };

  if (showModal === null || showModal === undefined || showModal === false) {
    return <span className='hidden'></span>;
  }

  return (
    <div className='block'>
      <div className='justify-center w-fit mx-5 md:mx-0 md:w-full h-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[150] outline-none focus:outline-none'>
        <div className='relative w-auto mx-auto'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='relative rounded-lg shadow p-4'>
              <div className='flex justify-end p-2'>
                <button
                  type='button'
                  className='text-white bg-transparent bg-gray-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
              <div className='p-6 pt-0 text-center'>
                <svg
                  className='mx-auto mb-4 w-12 h-12 text-gray-500 dark:text-gray-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
                <h3 className='mb-5 text-xs font-normal text-gray-900 '>
                  Are you sure you want to delete
                  <br />
                  <span className='text-primary font-bold text-sm leading-loose'>
                    {name} ?
                  </span>
                </h3>

                <div className='flex flex-row items-center justify-center'>
                  <button
                    type='button'
                    className='text-white focus:outline-none bg-red-700/60 hover:bg-red-800/70 focus:ring-red-200 font-bold capitalize rounded text-xs inline-flex items-center px-3 py-2 text-center mr-2 cursor-pointer'
                    onClick={loading ? null : () => block()}
                  >
                    {loading ? (
                      <AiOutlineLoading className='w-4 h-4 mx-5 animate-spin' />
                    ) : (
                      <p>Yes, I'm sure</p>
                    )}
                  </button>
                  <button
                    type='button'
                    className='text-gray-800 focus:outline-none bg-white hover:bg-gray-100 focus:ring-gray-300 rounded border border-gray-200 text-xs font-bold capitalize px-3 py-2 hover:text-gray-900 focus:z-10 cursor-pointer'
                    onClick={() => setShowModal(false)}
                  >
                    No, Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed w-full h-full inset-0 z-[100] bg-black'></div>
    </div>
  );
};

export default DeleteModal;
