/** @format */

import { Button, Container } from "@pwskills/rachnaui";
import React from "react";
import PWskills from "../../assets/PWskills";
import Homepage from "../../components/Admin/HomePage";
import AdminLayout from "../../components/Layout/AdminLayout";

const Admin = ({ color = "white" }) => {
	return (
		// <div>
		// 	<Container
		// 		className={`bg-${
		// 			color === "white" ? "black" : "white"
		// 		} !px-20 !py-[46px] medium:w-[85%] medium:m-auto large:w-[95%] flex justify-between w-full  min-w-full`}
		// 	>
		// 		<PWskills color={color} />
		// 		<Button>Logout</Button>
		// 	</Container>
		// 	<Homepage />
		// </div>
		<AdminLayout>
			<Homepage />
		</AdminLayout>
	);
};

export default Admin;
