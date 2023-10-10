/** @format */

import { Radio, Typography } from "@pwskills/rachnaui";
import React from "react";

const RegisterAs = () => {
	return (
		<div className="flex flex-col">
			<div>
				<Typography variant="bold" component="body-small">
					Register As
				</Typography>
			</div>
			<div>
				<Radio checked label="Individual" />
				<Radio checked label="Team" />
			</div>
		</div>
	);
};

export default RegisterAs;
