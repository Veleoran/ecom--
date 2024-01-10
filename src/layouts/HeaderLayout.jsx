import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/index.jsx";
import logo from '../assets/logo.jpg';

const HeaderLayout = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-md">
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="h-12 md:h-auto" />
        </div>
        <Navbar />
      </div>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default HeaderLayout;
