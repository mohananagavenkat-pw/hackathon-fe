/** @format */

import { Button, Input, Typography } from "@pwskills/rachnaui";
import React, { useState } from "react";
import { saveTokenAndRole, validateEmail } from "../../utils/functions";
import AuthApi from "../../apis/managers/authApi";
import { useNavigate } from "react-router-dom";
import { apiFunction } from "../../apis/api";
import useAuth from "../../hooks/app/useAuth";

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
	const signupFunction = useAuth().signupFunction;
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
		apiFunction("post" , "/auth/signin" , "" , creds).then((resp) => {
			console.log("response" , resp)
			signupFunction(resp?.data)
			localStorage.setItem("token" , resp?.data?.token)
			if(resp?.data?.isAdmin)
			navigate("/admin")
		    else
			navigate("/user")
		}).catch((err) => {
			console.log("err" , err)
		})
		
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
