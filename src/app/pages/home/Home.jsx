import React from 'react';

import { HomeCard } from '../../components/index';
import AppTopScreen from '../__AppTopScreen';

const Home = () => {
  return (
    <AppTopScreen
      screen={
        <div>
          <RowCards title={'Users'} />
          <RowCards title={'Admins'} />
          <RowCards title={'Transactions'} />
        </div>
      }
    />
  );
};

export default Home;

const RowCards = ({ title }) => {
  return (
    <div className='flex flex-col px-4 md:px-10 my-4'>
      <p className='text-base md:text-lg text-black font-bold uppercase my-2'>
        {title}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};
