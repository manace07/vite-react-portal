import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-neutral-500 h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />
      <div  className="flex flex-col flex-1">
        <div>
          <Header />
        </div>
        <div>
          <div>{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
