/** @format */

import { Typography } from "@pwskills/rachnaui";
import React, { useState } from "react";
import Editor from "../../CkEditor";

const Details = ({ hackathonData, setHackathonData }) => {
	return (
		<div className="flex-col">
			<div>
				<Typography variant="bold" component="body-regular">
					Details
				</Typography>
			</div>

			<div>
				<Editor
					data={hackathonData?.details}
					setData={(e) => {
						setHackathonData({ ...hackathonData, details: e });
					}}
				/>
			</div>
		</div>
	);
};

export default Details;
