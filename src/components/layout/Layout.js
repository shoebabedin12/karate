import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
