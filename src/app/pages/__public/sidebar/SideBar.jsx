import React from 'react';

import { Link } from 'react-router-dom';

import { masterPesaLogo } from '../../../../assets/assets';
import { __ROUTES } from '../../../features/__Routes/__Routes';

import { useSideBarContext } from './__context/SideBarContext';

import { FiUsers } from 'react-icons/fi';
import { AiOutlineSend } from 'react-icons/ai';
import { IoStatsChartOutline } from 'react-icons/io5';
import { MdOutlineSettings, MdAdminPanelSettings } from 'react-icons/md';

const SideBar = () => {
  const { menu, setMenu } = useSideBarContext();
  return (
    <div className='flex h-full w-[72px] py-10 border-r-2 border-gray-200'>
      <div className='flex flex-col justify-between items-center w-full'>
        <div className='flex'>
          <img src={masterPesaLogo} alt='masterpesa_logo' className='w-8 h-8' />
        </div>
        <div className='flex flex-col justify-center items-center space-y-10 bg-primary w-full py-14 rounded-tr-full rounded-br-lg mr-6'>
          <MenuItem
            id={__ROUTES.DASHBOARD.id}
            url={__ROUTES.DASHBOARD.route}
            menu={menu}
            setMenu={setMenu}
            icon={
              <IoStatsChartOutline
                className={
                  'w-7 h-7 cursor-pointer ' +
                  (menu === __ROUTES.DASHBOARD.id
                    ? 'text-secondary/60'
                    : 'text-white')
                }
              />
            }
          />
          <MenuItem
            id={__ROUTES.TRANSACTIONS.id}
            url={__ROUTES.TRANSACTIONS.route}
            menu={menu}
            setMenu={setMenu}
            icon={
              <AiOutlineSend
                className={
                  'w-7 h-7 cursor-pointer ' +
                  (menu === __ROUTES.TRANSACTIONS.id
                    ? 'text-secondary/60'
                    : 'text-white')
                }
              />
            }
          />
          <MenuItem
            id={__ROUTES.USERS.id}
            url={__ROUTES.USERS.route}
            menu={menu}
            setMenu={setMenu}
            icon={
              <FiUsers
                className={
                  'w-7 h-7 cursor-pointer ' +
                  (menu === __ROUTES.USERS.id
                    ? 'text-secondary/60'
                    : 'text-white')
                }
              />
            }
          />
          <MenuItem
            id={__ROUTES.ADMINS.id}
            url={__ROUTES.ADMINS.route}
            menu={menu}
            setMenu={setMenu}
            icon={
              <MdAdminPanelSettings
                className={
                  'w-7 h-7 cursor-pointer ' +
                  (menu === __ROUTES.ADMINS.id
                    ? 'text-secondary/60'
                    : 'text-white')
                }
              />
            }
          />
        </div>

        <div
          className={
            'flex flex-col justify-center items-center space-y-10 w-full py-14 rounded-r-full mr-6 ' +
            (menu === __ROUTES.SETTINGS.id
              ? 'bg-secondary/10'
              : 'bg-white mx-auto')
          }
        >
          <MenuItem
            id={__ROUTES.SETTINGS.id}
            url={__ROUTES.SETTINGS.route}
            menu={menu}
            setMenu={setMenu}
            icon={
              <MdOutlineSettings
                className={
                  'w-7 h-7 cursor-pointer ' +
                  (menu === __ROUTES.SETTINGS.id
                    ? 'text-secondary/60'
                    : 'text-gray-600')
                }
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

const MenuItem = ({ id, url, menu, icon, setMenu }) => {
  return (
    <Link to={url}>
      <div className='relative' onClick={() => setMenu(id)}>
        {icon}
        {id === menu ? (
          <div className='absolute h-10 w-[3px] -top-1 -right-[34px] rounded-full bg-secondary'></div>
        ) : (
          <span className='hidden'></span>
        )}
      </div>
    </Link>
  );
};
