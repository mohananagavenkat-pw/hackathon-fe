/** @format */

import React from "react";
import Navbar from "../Navbar/index.jsx";
import Footer from "../Footer/index.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
