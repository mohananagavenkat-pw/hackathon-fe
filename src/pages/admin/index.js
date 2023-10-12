import { Container } from "@pwskills/rachnaui";
import React from "react";
import PWskills from "../../assets/PWskills";
import Homepage from "../../components/Admin/HomePage";
import { Button } from "@mui/material";

const Admin = ({ color = "black", children }) => {
  return (
    <div>
      <Container
        className={`bg-${
          color === "white" ? "black" : "white"
        } !px-20 !py-[46px] medium:w-[85%] medium:m-auto large:w-[95%] flex justify-between w-full  min-w-full shadow-dark`}
      >
        <PWskills color={color} />
        <Button variant="contained">Logout</Button>
      </Container>
      {children}
    </div>
  );
};

export default Admin;
