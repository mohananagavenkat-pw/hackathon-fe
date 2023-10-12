/** @format */

import { Input, Select, SelectItem, Typography } from "@pwskills/rachnaui";
import React from "react";
import { hackathonTypes } from "../utils/constants";

const CreateUpdateHackathon = () => {
	return (
		<div className="flex flex-col gap-3 mx-[15%] my-[3%] justify-center">
			<div className="flex flex-col">
				<div>
					<Typography variant="medium" component="body-regular">
						Title
					</Typography>
				</div>
				<div>
					<Input variant="outlined" />
				</div>
			</div>
			<div className="flex flex-col">
				<div>
					<Typography variant="medium" component="body-regular">
						Hackathon Types
					</Typography>
				</div>
				<div>
					<Select>
						{Object.keys(hackathonTypes)?.map((type) => (
							<SelectItem value={hackathonTypes[type]}>{type}</SelectItem>
						))}
					</Select>
				</div>
			</div>
		</div>
	);
};

export default CreateUpdateHackathon;
