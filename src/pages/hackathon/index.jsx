/** @format */

import React from "react";
import ApplicationTab from "../../components/ApplicationTab";
import HackathonCard from "../../components/Cards/HackathonCard";
import hackathonImage from "../../assets/hackathonImage.svg";
import Hackathonbg from "../../assets/Hackathon.png";
import Navbar from "../../components/Navbar";
import { Container } from "@pwskills/rachnaui";
import { Button } from "@pwskills/rachnaui";
import PWskills from "../../assets/PWskills";

const HackathonDetails = () => {
	const tabs = [
		{
			text: "About Hackathon",
			component: <p>This is Hackathon Details</p>,
			value: "Tab1",
		},
		{
			text: "Rules",
			component: <p>Hackathon Rules</p>,
			value: "Tab2",
		},
		{
			text: "Prizes",
			component: <p>Hackathon Prizes</p>,
			value: "Prizes",
		},
		{
			text: "Timelines",
			component: <p>Hackathon Timeline</p>,
			value: "timelines",
		},
		{
			text: "Results",
			component: <p>Hackathon Results</p>,
			value: "results",
		},
		{
			text: "FAQs",
			component: <p>Hackathon FAQs</p>,
			value: "faqs",
		},
	];
	return (
		<div className="flex flex-col relative ">
			<div className={`flex bg-white justify-center items-center py-4 w-full `}>
				<div className={`flex justify-between w-[85%]`}>
					<PWskills color={"black"} />
					<Button>Registration</Button>
				</div>
			</div>
			{/* <Container className="p-4  min-w-[100%] relative"> */}
			<div className="absolute -z-10 ">
				<img src={Hackathonbg} alt="hackathonbg" />
			</div>
			<div
				className=""
				style={{
					background: "rgba(207, 207, 225, 1)",
					height: "300px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundImage: `url(${hackathonImage})`,
				}}
			></div>
			<div
				style={{ position: "relative" }}
				className=" flex items-center justify-center"
			>
				<div className="relative top-[240px] w-[85%]">
					<ApplicationTab options={tabs} direction={"column"} />
				</div>
			</div>

			<div
				style={{
					position: "absolute",
					top: "290px",
					width: "85%",
					left: "7.3%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<HackathonCard />
			</div>
			{/* </Container> */}
		</div>
	);
};

export default HackathonDetails;
