/** @format */

import React from "react";
import { Container, Button } from "@pwskills/rachnaui";

function Navbar() {
	return (
		<nav className="bg-black ">
			<Container className="p-4 medium:w-[85%] medium:m-auto large:w-[95%] flex justify-between">
				<img src="/images/PwSkillsLogo.svg" alt="PwSkillsLogo" />
				<Button>Registration</Button>
			</Container>
		</nav>
	);
}

export default Navbar;
