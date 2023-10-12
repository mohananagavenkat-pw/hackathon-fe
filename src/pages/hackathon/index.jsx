/** @format */

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ApplicationTab from "../../components/ApplicationTab";
import HackathonCard from "../../components/Cards/HackathonCard";
import hackathonImage from "../../assets/hackathonImage.svg";

const HackathonDetails = () => {
	const tabs = [
		{
			text: "Component 1",
			component: <p>This is component 1</p>,
			value: "Tab1",
		},
		{
			text: "Component 2",
			component: <p>This is component 2</p>,
			value: "Tab2",
		},
		{
			text: "Component 3",
			component: <p>This is component 3</p>,
			value: "Tab3",
		},
	];
	return (
		<div className="flex flex-col relative bg-gray-50 h-screen">
			<div
				style={{
					background: "rgba(207, 207, 225, 1)",
					height: "300px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundImage: `url(${hackathonImage})`,
				}}
			></div>
			<div style={{ top: "200px", position: "relative" }}>
				<ApplicationTab options={tabs} direction={"column"} />
			</div>
			<div
				style={{
					position: "absolute",
					top: "250px",
					width: "80%",
					left: "10%",
				}}
			>
				<HackathonCard />
			</div>
		</div>
	);
};

export default HackathonDetails;
