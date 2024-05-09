import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Issues and Reports';
     
      default:
        return 'Dashboard';  // Default title
    }
  };

  return (
    <div className='bg-neutral-500 h-screen w-screen overflow-hidden flex flex-row'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header title={getTitle()} />
        <div className='flex-1 overflow-auto'>
          <Outlet />  
        </div>
      </div>
    </div>
  );
}

export default Layout;

