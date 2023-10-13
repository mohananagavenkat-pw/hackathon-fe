/** @format */

import { Typography } from "@pwskills/rachnaui";
import React from "react";

const types = [
	{
		name: "Job battle HQ",
		img: "/images/JobBattle.svg",
	},
	{
		name: "Inception HQ",
		img: "/images/Inception.svg",
	},
	{
		name: "Code Quest HQ",
		img: "/images/CodeQuest.svg",
	},
	{
		name: "Hack Hunter HQ",
		img: "/images/HackHunter.svg",
	},
];

const Cards = ({ type }) => {
	return (
		<div className="flex flex-col bg-[#353233] rounded mb-5 ">
			{/* <div>{type.img}</div> */}
			<div>
				<img src={type.img} alt={type.name} />
			</div>
			<div className="flex justify-center h-[50px] ">
				<Typography variant="bold" component="h4" className="text-[#fff]">
					{type.name}
				</Typography>
			</div>
		</div>
	);
};

const HackthonCards = () => {
	return (
		<div className="bg-black max-w-full">
			<div className="flex flex-row justify-center mb-4">
				<Typography className="text-white" variant="bold" component="h2">
					We organise the best Hackathon.
				</Typography>
			</div>
			<div className="px-2 py-10 flex flex-row  w-[100%]">
				{types.map((item) => (
					<div className="flex flex-[20%]  ">
						<Cards type={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default HackthonCards;
