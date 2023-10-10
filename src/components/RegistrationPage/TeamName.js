/** @format */

import { Input, Typography } from "@pwskills/rachnaui";
import React from "react";

const TeamName = () => {
	return (
		<div className="flex flex-col">
			<div>
				<Typography variant="bold" component="body-small">
					Team Name
				</Typography>
			</div>
			<div className="flex ">
				<Input variant="outlined" />
			</div>
		</div>
	);
};

export default TeamName;
