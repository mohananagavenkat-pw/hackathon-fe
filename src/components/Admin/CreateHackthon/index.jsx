/** @format */

import React, { useState } from "react";
import Title from "./Title";
import HackthonTypes from "./HackthonTypes";
import HackathonDates from "./HackathonDates";

import HackathonPrices from "./HackathonPrices";
import Details from "./Details";
import Questions from "./Questions";
import { Button, Typography } from "@pwskills/rachnaui";

const CreateUpdateHackathon = () => {
	const [hackathonData, setHackathonData] = useState({
		title: "",
		hackathonType: "",
		hackathonMode: "",
		submissionType: "",
		teamSize: 1,
		startDate: "",
		maxStartDate: "",
		endDate: "",
		resultDate: "",
		prices: "",
		details: "",
	});
	console.log("hack----", hackathonData);
	return (
		<div className="flex flex-col gap-3 mx-[15%] my-[3%] justify-center ">
			<div className="flex flex-row justify-between">
				<div>
					<Typography variant="medium" component="h3">
						Create Hackathon
					</Typography>
				</div>
				<div>
					<Button variant="primary">Create</Button>
				</div>
			</div>
			<div>
				<Title
					hackathonData={hackathonData}
					setHackathonData={setHackathonData}
				/>
			</div>

			<div>
				<HackthonTypes
					hackathonData={hackathonData}
					setHackathonData={setHackathonData}
				/>
			</div>
			<div>
				<HackathonDates
					hackathonData={hackathonData}
					setHackathonData={setHackathonData}
				/>
			</div>
			<div>
				<HackathonPrices />
			</div>
			<div>
				<Details />
			</div>
			<div>
				<Questions />
			</div>
		</div>
	);
};

export default CreateUpdateHackathon;
