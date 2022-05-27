import React from 'react';
import { Link } from 'react-router-dom';

import { notFound } from '../../../../assets/assets';
import { __ROUTES } from '../../../features/__Routes/__Routes';

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full bg-white'>
      <img src={notFound} alt='notFound' />
      <Link to={__ROUTES.DASHBOARD.route}>
        <p className='underline decoration-primary/50 text-xs font-normal cursor-pointer capitalize text-gray-400'>
          Go Back to Home Page
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
