/** @format */

import { Button, Input, Typography } from "@pwskills/rachnaui";
import React, { useState } from "react";
import { saveTokenAndRole, validateEmail } from "../../utils/functions";
import AuthApi from "../../apis/managers/authApi";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [creds, setCreds] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
		login: "",
	});

	const navigate = useNavigate();

	const handleInputs = (e) => {
		const { name, value } = e.target;
		setCreds({ ...creds, [name]: value.trimStart() });
		if (name === "email") {
			if (!validateEmail(value)) {
				setErrors({ ...errors, email: "Invalid email" });
			} else {
				setErrors({ ...errors, email: "" });
			}
		}
	};

	const handleLogin = async () => {
		setErrors({
			name: "",
			email: "",
			password: "",
			signUp: "",
		});
		if (!creds.name) {
			setErrors({ ...errors, name: "Please enter name" });
			return;
		}

		if (!creds.email) {
			setErrors({ ...errors, email: "Please enter an email." });
			return;
		}
		if (!validateEmail(creds?.email)) {
			setErrors({ ...errors, signUp: "Please check entered email." });
			return;
		}
		if (!creds.password) {
			setErrors({ ...errors, password: "Please enter password" });
			return;
		}

		try {
			setErrors({
				name: "",
				email: "",
				password: "",
				signUp: "",
			});
			const res = await AuthApi.signUp(creds);

			if (!res?.error) {
				console.log("res----", res);
				saveTokenAndRole(res.token, res.isAdmin);
				navigate(`${res.isAdmin ? "/admin" : "/user"}`);
			}
		} catch (err) {
			setErrors({ ...errors, signUp: err });
		}
	};
	console.log(errors);

	return (
		<div className="grid place-items-center h-[100vh] w-[100vw] ">
			<div className="w-[40%] !medium:w-[60%]flex-col gap-3 ">
				<div className="flex flex-row justify-center">
					<Typography variant="semi-bold" component="h3">
						Sign Up
					</Typography>
				</div>
				<div className="flex flex-col">
					<div>
						<Typography variant="semi-bold" component="body-small">
							Name
						</Typography>
					</div>
					<div>
						<Input
							variant="outlined"
							onChange={handleInputs}
							name="name"
							error={errors?.name}
						/>
					</div>
					{errors?.name && (
						<div>
							<Typography
								variant="semi-bold"
								component="body-small"
								className="text-red-500"
							>
								{errors?.name}
							</Typography>
						</div>
					)}
				</div>
				<div className="flex flex-col mt-3">
					<div>
						<Typography variant="semi-bold" component="body-small">
							Email
						</Typography>
					</div>
					<div>
						<Input
							variant="outlined"
							onChange={handleInputs}
							name="email"
							error={errors?.email}
						/>
					</div>
					{errors?.email && (
						<div>
							<Typography
								variant="semi-bold"
								component="body-small"
								className="text-red-500"
							>
								{errors?.email}
							</Typography>
						</div>
					)}
				</div>
				<div className="flex flex-col mt-3">
					<div>
						<Typography variant="semi-bold" component="body-small">
							Password
						</Typography>
					</div>
					<div>
						<Input
							variant="outlined"
							type="password"
							onChange={handleInputs}
							name="password"
							error={errors?.password}
						/>
					</div>
					{errors?.password && (
						<div className="flex flex-row ">
							<Typography
								variant="semi-bold"
								component="body-small"
								className="text-red-500"
							>
								{errors?.password}
							</Typography>
						</div>
					)}
				</div>
				{errors?.signUp && (
					<div className="flex flex-row justify-center mt-3 -mb-4">
						<Typography
							variant="semi-bold"
							component="body-small"
							className="text-red-500"
						>
							{errors?.signUp}
						</Typography>
					</div>
				)}
				<div className="flex mt-5">
					<Button className="w-full" onClick={handleLogin}>
						Login
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
