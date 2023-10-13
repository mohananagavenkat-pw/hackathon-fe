/** @format */

import { Typography } from "@pwskills/rachnaui";
import React, { useState } from "react";
import Editor from "../../CkEditor";

const HackathonPrices = ({ hackathonData, setHackathonData }) => {
	return (
		<div className="flex flex-col">
			<div>
				<Typography variant="medium" component="body-regular">
					Prices
				</Typography>
			</div>
			<div className="border !h-[150%]">
				<Editor
					data={hackathonData?.prices}
					setData={(e) => {
						setHackathonData({ ...hackathonData, prices: e });
					}}
					className="h-[150%]"
				/>
			</div>
		</div>
	);
};

export default HackathonPrices;
