import React from "react";
import Navbar from "../../components/Navbar";
import Homepage from "../../components/Homepage";
import FooterComponent from "../../components/Footer";
import "../../index.css";

const User = () => {
  return (
    <div>
      <Navbar color="white" />
      <Homepage />
      <FooterComponent />
    </div>
  );
};

export default User;
