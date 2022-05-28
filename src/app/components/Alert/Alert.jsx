import React from 'react';

import { FaTimesCircle } from 'react-icons/fa';

const Alert = ({ error, success, setError, setSuccess }) => {
  if (error === null && success === null) {
    return <span className='hidden'></span>;
  }

  return (
    <div className='relative flex items-center justify-center mx-4 lg:mx-0'>
      <div
        className={
          'absolute top-4 right-auto left-auto w-full lg:w-1/2  px-2 py-5 z-50 rounded-md ' +
          (error ? 'bg-red-700/70' : 'bg-green-700/70')
        }
      >
        <div className='flex flex-row items-center justify-between'>
          <p className='text-gray-100 font-bold text-sm capitalize pl-4'>
            {error ? error : success ? success : ''}
          </p>
          <div className='flex border-l-[1px] border-gray-100 pl-4 ml-4'>
            <FaTimesCircle
              className='text-white cursor-pointer w-7 h-7'
              onClick={() => {
                setError(null);
                setSuccess(null);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
