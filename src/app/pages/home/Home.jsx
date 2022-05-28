/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { HomeCard } from '../../components/index';
import AppTopScreen from '../__AppTopScreen';

import { Navigate } from 'react-router-dom';
import { useHomeContext, useAuthContext } from '../../__context/index';

const _TRANS = 'transactions';
const _COMPLETE = 'Completed';
const _ACTIVE = 'Active';
const _PENDING = 'Pending';
const _BLOCKED = 'Blocked';
const _DELETED = 'Deleted';
const _CANCELLED = 'Cancelled';

const Home = () => {
  const { stats, get } = useHomeContext();
  const { _auth } = useAuthContext();
  const [locals, setLocals] = useState(null);

  useEffect(() => {
    if (!stats && _auth !== null) get(_auth.token);
    else setLocals(stats);
  }, [stats]);

  if (!_auth) return <Navigate replace to='/login' />;

  return (
    <AppTopScreen
      screen={
        <div>
          <RowCards title={'Users'} data={locals ? locals.users : null} />
          <RowCards title={'Admins'} data={locals ? locals.admins : null} />
          <RowCards
            title={_TRANS}
            data={locals ? locals.transactions : null}
            type={_TRANS}
          />
        </div>
      }
    />
  );
};

export default Home;

const RowCards = ({ title, data, type }) => {
  return (
    <div className='flex flex-col px-4 md:px-10 my-4'>
      <p className='text-base md:text-lg text-black font-bold uppercase my-2'>
        {title}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
        <HomeCard title={'Total'} quantity={data !== null ? data.total : 0} />
        <HomeCard
          title={type === _TRANS ? _COMPLETE : _ACTIVE}
          quantity={
            data !== null ? (type === _TRANS ? data.completed : data.active) : 0
          }
        />
        <HomeCard
          title={type === _TRANS ? _PENDING : _BLOCKED}
          quantity={
            data !== null ? (type === _TRANS ? data.pending : data.blocked) : 0
          }
        />
        <HomeCard
          title={type === _TRANS ? _CANCELLED : _DELETED}
          quantity={
            data !== null
              ? type === _TRANS
                ? data.cancelled
                : data.deleted
              : 0
          }
        />
      </div>
    </div>
  );
};
