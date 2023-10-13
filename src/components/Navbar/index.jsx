/** @format */

import React from "react";
import { Container, Button, IconButton } from "@pwskills/rachnaui";
import pwSkillsLogo from "../../assets/PwSkillsLogo.svg";
import PWskills from "../../assets/PWskills";
import { useNavigate } from "react-router-dom";
function Navbar({color}) {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const handleRouting = (type) => {
    switch(type) {
      case "singup" : 
      navigate('/sign-up') 
      break;
      case "singin" : 
      navigate('/signin') 
      break;
      default : 
      navigate('/sign-up') 
      break;
    }
}
  return (
    // <nav className=bg-${color === "white" ? "black" : "white"} >
    <Container
      className={`bg-${
        color === "white" ? "black" : "white"
      } !px-20 !py-[46px] medium:w-[85%] medium:m-auto large:w-[95%] flex justify-between w-full  min-w-full items-center`}
    >
      <PWskills color={color} />
      {token ?  <div className="w-[50px] h-[50px] bg-yellow-600 rounded-[50%] flex justify-center items-center text-white">user</div> : <div className="flex gap-2">
        
      <Button onClick={() => handleRouting('signin')}>Sign In</Button>
        <Button variant="secondary" onClick={() => handleRouting('signup')}>Sign Up</Button>
      </div>}
      
    </Container>
    // </nav>
  );
}

export default Navbar;
