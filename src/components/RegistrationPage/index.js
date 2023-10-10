/** @format */

import { Typography } from "@pwskills/rachnaui";
import React from "react";
import RegisterAs from "./RegisterAs";
import TeamName from "./TeamName";
import AddMembers from "./AddMembers";

const RegistrationPage = () => {
	return (
		<div className="flex flex-col h-fit mb-[40vh] px-5 gap-3">
			<div>
				<Typography variant="bold" component="body-regular">
					Registration Form
				</Typography>
			</div>
			<div>
				<RegisterAs />
			</div>
			<div>
				<TeamName />
			</div>
			<div>
				<AddMembers />
			</div>
		</div>
	);
};

export default RegistrationPage;
