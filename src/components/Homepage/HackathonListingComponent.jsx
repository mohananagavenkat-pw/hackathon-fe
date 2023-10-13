/** @format */

import React, { useEffect, useState } from "react";
import { Button, Typography, Container, Loader } from "@pwskills/rachnaui";
import EventCard from "./EventCard";
import { ArrowForward } from "@pwskills/rachnaui/Icons";
import { Slider } from "@pwskills/rachnaui";
import { classNames, randomId } from "@pwskills/rachnaui/utils";
import useHomePage from "../../hooks/app/useHomePage";
import { BASE_API_URL } from "../../constants/Config";

function HackathonListingComponent() {
	//   const fetchHackathons = useHomePage().fetchHackathons;
	//   const resetHackathons = useHomePage().resetHackathons;
	//   const { hackathons } = useHomePage();

	const [hackathons, setHackathons] = useState([]);
	const [apiLoading, setApiLoading] = useState(false);

	const Filters = ["live", "upcoming", "previous"];

	const FilterMap = {
		live: {
			name: "Live",
		},
		upcoming: {
			name: "Upcoming",
		},
		previous: {
			name: "Previous",
		},
	};

	const [selectedFilter, setSelectedFilter] = useState(Filters[0]);

	const fetchHackathons = async (eventTime) => {
		setApiLoading(true);
		fetch(`${BASE_API_URL}/user/?hackathonMode=${eventTime}&skip=1&limit=10`)
			.then((res) => res.json())
			.then((data) => {
				setHackathons(data.data[0].mockTest);
				console.log("result", data.data[0].mockTest);
			})
			.catch((err) => {})
			.finally(() => {
				setApiLoading(false);
			});
	};

	//   useEffect(() => {
	//     fetchHackathons(selectedFilter);
	//     // fetchAPI();
	//   }, [fetchHackathons, selectedFilter]);

	useEffect(() => {
		setHackathons([]);
		fetchHackathons(selectedFilter);
	}, [selectedFilter]);

	const handleFilterSelection = (filter) => {
		if (selectedFilter !== filter) {
			setSelectedFilter(filter);
		}
	};

	return (
		<div className="flex flex-col gap-[36px]">
			<div className="flex flex-col gap-6">
				<div className="flex gap-6 items-start">
					<div className="w-[4px] h-[52px] bg-[#E97862]"></div>
					<Typography
						variant="bold"
						className=" self-center leading-[36px] text-[24px]"
					>
						Our Hackathons
					</Typography>
				</div>
				<div className="flex gap-2">
					{Filters.map((filter) => {
						return (
							<div
								variant="text"
								className={`!p-1 cursor-pointer ${
									selectedFilter === filter
										? "!border-b-[2px] !border-b-[#1B2124] border-solid"
										: "border-none"
								}`}
								onClick={() => handleFilterSelection(filter)}
							>
								<Typography
									component="body-regular"
									className={`${
										selectedFilter === filter
											? "font-bold text-[#1B2124] border-b-1 border-b-solid border-b-[#1B2124]"
											: "font-semibold text-[#757575] border-none"
									}`}
								>
									{FilterMap[filter].name}
								</Typography>
							</div>
						);
					})}
				</div>
			</div>
			<div className="!w-full">
				<Slider
					className="[&>div]:w-[420px] gap-6 p-[10px] !pb-[20px]  "
					iconWrapperClass="mt-6 "
				>
					{!apiLoading &&
						(hackathons.length > 0 ? (
							hackathons.map((hackathonEvent) => {
								return (
									<EventCard
										hackathonEvent={hackathonEvent}
										eventTime={selectedFilter}
									/>
								);
							})
						) : (
							<div className="mx-auto h-[390px]  flex justify-center items-center ">
								<Typography variant="semi-bold" component="h3">
									No data found!!
								</Typography>
							</div>
						))}
					{apiLoading && (
						<div className="mx-auto h-[390px]  flex justify-center items-center ">
							<Loader className="h-full flex justify-center items-center" />
						</div>
					)}
				</Slider>
			</div>
		</div>
	);
}

export default HackathonListingComponent;
