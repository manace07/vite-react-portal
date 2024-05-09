<<<<<<< HEAD
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
=======
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
>>>>>>> maxiarbn/main

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
    <div className="bg-neutral-500 h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />
<<<<<<< HEAD
      <div  className="flex flex-col flex-1">
        <div>
          <Header />
        </div>
        <div>
          <div>{<Outlet />}</div>
=======
      <div className='flex flex-col flex-1'>
        <Header title={getTitle()} />
        <div className='flex-1 overflow-auto'>
          <Outlet />  
>>>>>>> maxiarbn/main
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default Layout;
=======
}

export default Layout;

>>>>>>> maxiarbn/main
