import React from 'react';

import HomeCard from '../../components/Cards/HomeCard';
import AppScreen from '../__AppScreen';

const Home = () => {
  return (
    <AppScreen
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
    <div className='flex flex-col px-10 my-8'>
      <p className='text-xl text-black font-bold uppercase'>{title}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};
