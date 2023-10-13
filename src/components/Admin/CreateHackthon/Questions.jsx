/** @format */

import { Button, Select, SelectItem, Typography } from "@pwskills/rachnaui";
import React, { useState } from "react";
import Editor from "../../CkEditor";
import { questionType } from "../../../utils/constants";

const Questions = ({ hackathonData, setHackathonData }) => {
	return (
		<div className="flex flex-col">
			<div>
				<Typography variant="medium" component="body-regular">
					Questions
				</Typography>
			</div>

			<div className="flex flex-col bg-gray-200 p-2 rounded mt-2">
				<div className="flex flex-col">
					<div>
						<Typography variant="medium" component="body-regular">
							Question
						</Typography>
					</div>
					<div>
						<Editor
							data={hackathonData?.questions?.question}
							setData={(e) => {
								setHackathonData({
									...hackathonData,
									questions: { ...hackathonData?.questions, question: e },
								});
							}}
						/>
					</div>
				</div>
				<div className="flex flex-col mt-3">
					<div>
						<Typography variant="medium" component="body-regular">
							Question Type
						</Typography>
					</div>
					<div>
						<Select
							onChange={(e) => {
								setHackathonData({
									...hackathonData,
									questions: { ...hackathonData?.questions, questionType: e },
								});
							}}
							value={hackathonData?.questions?.questionType}
						>
							{Object.keys(questionType)?.map((type) => (
								<SelectItem value={questionType?.[type]}>{type}</SelectItem>
							))}
						</Select>
					</div>
				</div>
				{/* <div className="flex flex-col mt-2">
					<div>
						<Typography variant="medium" component="body-regular">
							Instructions
						</Typography>
					</div>
					<div>
						<Editor data={instructionsTxt} setData={setInstructionsTxt} />
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Questions;
