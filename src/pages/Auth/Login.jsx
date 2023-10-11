/** @format */

import { Button, Input, Typography } from "@pwskills/rachnaui";
import React, { useState } from "react";
import { saveTokenAndRole, validateEmail } from "../../utils";
import AuthApi from "../../apis/managers/authApi";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
	const [creds, setCreds] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		login: "",
	});

	const handleInputs = (e) => {
		const { name, value } = e.target;
		setCreds({ ...creds, [name]: value });
		if (name === "email") {
			if (!validateEmail(value)) {
				setErrors({ ...errors, email: "Invalid email" });
			} else {
				setErrors({ ...errors, email: "" });
			}
		}
	};

	const handleLogin = async () => {
		setErrors({ ...errors, login: "" });
		if (!creds.email) {
			setErrors({ ...errors, login: "Please enter an email." });
			return;
		}
		if (!validateEmail(creds?.email)) {
			setErrors({ ...errors, login: "Please check entered email." });
			return;
		}
		if (!creds.password) {
			setErrors({ ...errors, password: "Please enter password" });
			return;
		}

		try {
			setErrors({
				email: "",
				password: "",
				login: "",
			});
			//api
			const res = await AuthApi.login(creds);
			if (!res?.error) {
				saveTokenAndRole(res.token, res.isAdmin);

				navigate(`${res.isAdmin ? "/admin" : "/user"}`);
				// <Navigate to={`${res.isAdmin ? "/admin" : "/user"}`} />;
			}
		} catch (err) {
			setErrors({ ...errors, login: err });
		}
	};

	return (
		<div className="grid place-items-center h-[100vh] w-[100vw] ">
			<div className="w-[40%] !medium:w-[60%]flex-col gap-3 ">
				<div className="flex flex-row justify-center">
					<Typography variant="semi-bold" component="h3">
						Login
					</Typography>
				</div>
				<div className="flex flex-col">
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
						<div className="flex flex-row justify-center mt-3 -mb-4">
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
				{errors?.login && (
					<div className="flex flex-row justify-center mt-3 -mb-4">
						<Typography
							variant="semi-bold"
							component="body-small"
							className="text-red-500"
						>
							{errors?.login}
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

export default Login;
