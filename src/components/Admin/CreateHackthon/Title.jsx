/** @format */

import { Input, Typography } from "@pwskills/rachnaui";
import React from "react";

const Title = ({ hackathonData, setHackathonData }) => {
	const handleTitle = (e) => {
		setHackathonData({ ...hackathonData, title: e.target.value.trimStart() });
	};
	return (
		<div className="flex flex-col">
			<div>
				<Typography variant="medium" component="body-regular">
					Title
				</Typography>
			</div>
			<div>
				<Input
					variant="outlined"
					onChange={handleTitle}
					value={hackathonData?.title}
				/>
			</div>
		</div>
	);
};

export default Title;
