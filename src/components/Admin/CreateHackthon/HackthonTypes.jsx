/** @format */

import { Input, Select, SelectItem, Typography } from "@pwskills/rachnaui";
import React from "react";
import {
	hackathonModes,
	hackathonTypes,
	submissionsType,
} from "../../../utils/constants";

const HackthonTypes = ({ hackathonData, setHackathonData }) => {
	const handleHackathonTypes = (e) => {
		setHackathonData({ ...hackathonData, hackathonType: e });
	};
	const handleHackathonModes = (e) => {
		setHackathonData({ ...hackathonData, hackathonMode: e });
	};
	const handleSubmissionTypes = (e) => {
		setHackathonData({ ...hackathonData, submissionType: e });
	};
	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-row gap-3">
				<div className="flex flex-col w-[50%]">
					<div>
						<Typography variant="medium" component="body-regular">
							Hackathon Types
						</Typography>
					</div>
					<div>
						<Select
							onChange={handleHackathonTypes}
							value={hackathonData?.hackathonType}
						>
							{Object.keys(hackathonTypes)?.map((type) => (
								<SelectItem value={hackathonTypes?.[type]}>{type}</SelectItem>
							))}
						</Select>
					</div>
				</div>
				<div className="flex flex-col w-[50%]">
					<div>
						<Typography variant="medium" component="body-regular">
							Hackathon Modes
						</Typography>
					</div>
					<div>
						<Select
							onChange={handleHackathonModes}
							value={hackathonData?.hackathonMode}
						>
							{Object.keys(hackathonModes)?.map((mode) => (
								<SelectItem value={hackathonModes[mode]}>{mode}</SelectItem>
							))}
						</Select>
					</div>
				</div>
			</div>

			{/* ---------------------------- */}
			<div className="flex flex-row gap-3">
				<div className="flex flex-col w-[50%]">
					<div>
						<Typography variant="medium" component="body-regular">
							Submission Type
						</Typography>
					</div>
					<div>
						<Select
							onChange={handleSubmissionTypes}
							value={hackathonData?.submissionType}
						>
							{Object.keys(submissionsType)?.map((item) => (
								<SelectItem value={submissionsType[item]}>{item}</SelectItem>
							))}
						</Select>
					</div>
				</div>
				<div className="flex flex-col w-[50%]">
					<div>
						<Typography variant="medium" component="body-regular">
							Team Size
						</Typography>
					</div>
					<div>
						<Input
							variant="outlined"
							className="border -mt-[20px]"
							type="number"
							onChange={(e) =>
								setHackathonData({
									...hackathonData,
									teamSize: e.target.value,
								})
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HackthonTypes;
