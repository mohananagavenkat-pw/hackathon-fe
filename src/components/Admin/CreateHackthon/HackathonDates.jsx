/** @format */

import { Typography } from "@pwskills/rachnaui";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const HackathonDates = ({ hackathonData, setHackathonData }) => {
	// const [startDate, setStartDate] = useState(null);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className="flex flex-col gap-3">
				<div className="flex flex-row gap-2 justify-between">
					<div className="flex flex-col w-[50%]  ">
						<div>
							<Typography variant="medium" component="body-regular">
								Start Date
							</Typography>
						</div>
						<div>
							<DateTimePicker
								onChange={(e) => {
									setHackathonData({
										...hackathonData,
										startDate: new Date(e).toISOString(),
									});
								}}
								className="w-[100%]"
							/>
						</div>
					</div>
					<div className="flex flex-col  w-[50%]">
						<div>
							<Typography variant="medium" component="body-regular">
								Max Start Date
							</Typography>
						</div>
						<div>
							<DateTimePicker
								onChange={(e) => {
									setHackathonData({
										...hackathonData,
										maxStartDate: new Date(e).toISOString(),
									});
								}}
								className="w-[100%]"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-row gap-2">
					<div className="flex flex-col  w-[50%]">
						<div>
							<Typography variant="medium" component="body-regular">
								End Date
							</Typography>
						</div>
						<div>
							<DateTimePicker
								onChange={(e) => {
									setHackathonData({
										...hackathonData,
										endDate: new Date(e).toISOString(),
									});
								}}
								className="w-[100%]"
							/>
						</div>
					</div>
					<div className="flex flex-col  w-[50%]">
						<div>
							<Typography variant="medium" component="body-regular">
								Result Date
							</Typography>
						</div>
						<div>
							<DateTimePicker
								onChange={(e) => {
									setHackathonData({
										...hackathonData,
										resultDate: new Date(e).toISOString(),
									});
								}}
								className="w-[100%]"
							/>
						</div>
					</div>
				</div>
			</div>
		</LocalizationProvider>
	);
};

export default HackathonDates;
