/** @format */

import { Typography } from "@pwskills/rachnaui";
import React, { useState } from "react";
import Editor from "../../CkEditor";

const Details = () => {
	const [details, setDetails] = useState("");
	return (
		<div className="flex-col">
			<div>
				<Typography variant="bold" component="body-regular">
					Details
				</Typography>
			</div>

			<div>
				<Editor data={details} setData={setDetails} />
			</div>
		</div>
	);
};

export default Details;
