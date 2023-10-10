/** @format */

import { Button, Input, Typography } from "@pwskills/rachnaui";
import React, { useEffect, useState } from "react";

import { Trash } from "@pwskills/rachnaui/Icons";
import Add from "../../styles/Icons/Add";
import { validateEmail } from "../../utils";

const member = {
	email: "",
	name: "",
};
const errObj = { email: "", name: "" };

const AddMembers = () => {
	const [membersList, setMembersList] = useState([]);

	const [errors, setErrors] = useState([]);

	const deleteField = (index) => {
		const memberTemp = [...membersList];
		memberTemp.splice(index, 1);
		setMembersList([...memberTemp]);
		const errTemp = [...errors];
		errTemp.splice(index, 1);
		setErrors([...errTemp]);
	};

	const addField = () => {
		setMembersList([...membersList, { ...member }]);
		setErrors([...errors, { ...errObj }]);
	};

	const handleFieldData = (index, e) => {
		const { name, value } = e.target;
		const errTemp = [...errors];
		if (name === "email") {
			if (!validateEmail(value)) {
				errTemp[index].email = "Invalid email";

				setErrors(errTemp);
			} else {
				errTemp[index].email = "";
				setErrors(errTemp);
			}
		}
		const temp = [...membersList];
		temp[index][name] = value;
		setMembersList([...temp]);
	};

	useEffect(() => {
		if (membersList.length === 0) {
			setMembersList([{ ...member }]);
			setErrors([{ ...errObj }]);
		}
	}, [membersList]);

	// console.log(membersList);
	console.log("err-----", errors);

	return (
		<div className="flex flex-col">
			<div>
				<Typography variant="bold" component="body-regular">
					Add Members
				</Typography>
			</div>
			<div className="flex flex-col">
				{membersList?.map((item, index) => (
					<div
						className="flex flex-row justify-start items-center border "
						key={index + "qw"}
					>
						<div className="flex flex-row gap-3">
							<div className="flex flex-col ">
								<div>
									<Typography variant="bold" component="body-regular">
										Member Email
									</Typography>
								</div>
								<div>
									<Input
										variant="outlined"
										name="email"
										value={item.email}
										onChange={(e) => handleFieldData(index, e)}
									/>
									{errors[index].email && (
										<div className="text-red-500">{errors[index].email}</div>
									)}
								</div>
							</div>

							<div className="flex flex-col">
								<div>
									<Typography variant="bold" component="body-regular">
										Member Name
									</Typography>
								</div>

								<div className="flex flex-row items-center gap-3">
									<Input
										variant="outlined"
										name="name"
										value={item.name}
										onChange={(e) => handleFieldData(e, index)}
									/>
									{index === membersList.length - 1 && (
										<div className="flex flex-row gap-3 justify-end items-center  mt-3">
											<Button
												variant="text"
												className="!p-0"
												onClick={deleteField}
											>
												<Trash />
											</Button>
											<Button
												variant="text"
												className="!p-0"
												onClick={addField}
											>
												<Add on />
											</Button>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AddMembers;
