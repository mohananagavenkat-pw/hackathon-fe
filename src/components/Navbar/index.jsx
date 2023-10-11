import React from "react";
import { Container, Button } from "@pwskills/rachnaui";
import pwSkillsLogo from "../../assets/PwSkillsLogo.svg";
import PWskills from "../../assets/PWskills";

function Navbar({ color }) {
  return (
    <nav className={`bg-${color === "white" ? "black" : "white"} `}>
      <Container className="p-4 medium:w-[85%] medium:m-auto large:w-[95%] flex justify-between">
        <PWskills color={color} />
        <Button>Registration</Button>
      </Container>
    </nav>
  );
}

export default Navbar;
