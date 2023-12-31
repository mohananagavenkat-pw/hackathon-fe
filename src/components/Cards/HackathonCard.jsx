/** @format */

import { Button, Grid } from "@mui/material";
// import pwSkillsLogo from  'public/images/PwSkillsLogo.svg'
import React from "react";
import amazonImage from "../../assets/amazon.svg";
import community from "../../assets/community.svg";
import Calendar from "../../assets/Calendar";
import { Navigate, useNavigate } from "react-router-dom";

const HackathonCard = ({hackathonDetails}) => {
	let navigate = useNavigate();
	const iconMapFunction = (type) => {
		switch (type) {
			case "calendar":
				return <Calendar />;
				case "group":
				return <img src={community} alt='community'/>;
			default:
				return <Calendar />;
		}
	};
	const iconTextArray = [
		{
			icon: "calendar",
			primaryText: "Starts On",
			secondaryText: "10/10/2023",
		},
		{
			icon: "calendar",
			primaryText: "Ends On",
			secondaryText: "17/10/2023",
		},
		{
			icon: "group",
			primaryText: "Team Size",
			secondaryText: "1",
		},
	];
	const myFunction = () => {
		navigate("/hackathon/:name/:id/live");
	};
	return (
		<div
			className="flex flex-col w-full gap-4 p-2 bg-white"
			style={{
				paddingLeft: "24px",
				paddingRight: "24px",
				paddingTop: "16px",
				paddingBottom: "16px",
				borderRadius: "8px",
			}}
		>
			<div className="flex w-full gap-4">
				<div style={{ padding: "28px", background: "#F8F8F8" }}>
					<img src={amazonImage} alt="icon" />
				</div>
				<div className="flex justify-between w-full" style={{ padding: "8px" }}>
					<div className="flex flex-col gap-1">
						<p style={{ fontSize: "24px", fontWeight: 700 }}>{hackathonDetails?.title}</p>
						<p style={{ fontSize: "16px", fontWeight: 400, color: "#757575" }}>
						{hackathonDetails?.title}
						</p>
					</div>
					<div>
						<button
							// onClick={() => myFunction()}
							style={{
								border: "1px solid #E97862",
								color: "#E97862",
								borderRadius: "4px",
								paddingTop: "9px",
								paddingBottom: "9px",
								paddingLeft: "20px",
								paddingRight: "20px",
							}}
						>
							Register Now
						</button>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center gap-6">
				{iconTextArray.map((obj, index) => (
					<div className="flex gap-2">
						{iconMapFunction(obj.icon)}
						<div className="flex flex-col">
							<p
								style={{ fontSize: "12px", color: "#757575", fontWeight: 400 }}
							>
								{obj.primaryText}
							</p>
							<p style={{ fontSize: "16px", fontWeight: 600 }}>
								{obj.secondaryText}
							</p>
						</div>
						{index !== iconTextArray.length - 1 && (
							<div
								style={{ background: "#B7B7B7", width: "1px", height: "50px" }}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default HackathonCard;
