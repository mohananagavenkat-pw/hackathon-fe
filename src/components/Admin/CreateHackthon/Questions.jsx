/** @format */

import { Button, Typography } from "@pwskills/rachnaui";
import React, { useState } from "react";
import Editor from "../../CkEditor";

const Questions = () => {
	const [questionTxt, setQuestionTxt] = useState("");
	const [instructionsTxt, setInstructionsTxt] = useState("");
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
						<Editor data={questionTxt} setData={setQuestionTxt} />
					</div>
				</div>
				<div className="flex flex-col mt-2">
					<div>
						<Typography variant="medium" component="body-regular">
							Instructions
						</Typography>
					</div>
					<div>
						<Editor data={instructionsTxt} setData={setInstructionsTxt} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Questions;
