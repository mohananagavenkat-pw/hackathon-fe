/** @format */

import { Container } from "@pwskills/rachnaui";
import React from "react";
import PWskills from "../../assets/PWskills";
import { Button } from "@mui/material";

const AdminLayout = ({ children, color = "white" }) => {
	return (
		<div>
			<Container
				className={`bg-${
					color === "white" ? "black" : "white"
				} !px-20 !py-[46px] medium:w-[85%] medium:m-auto large:w-[95%] flex justify-between w-full  min-w-full`}
			>
				<PWskills color={color} />
				<Button>Logout</Button>
			</Container>
			{children}
		</div>
	);
};

export default AdminLayout;
