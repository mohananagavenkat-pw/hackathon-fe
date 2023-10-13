/** @format */

import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../hooks/utils/classes";
import { useEffect, useState } from "react";

const CheckProtectedRoute = ({ children, roleArg }) => {
	const [isAdmin] = useState(LocalStorage.get("isAdmin"));
	const navigate = useNavigate();

	const role = isAdmin ? "admin" : "user";

	useEffect(() => {
		if (isAdmin === null) {
			navigate("/user");
		}
		if (role !== roleArg) {
			LocalStorage.remove("isAdmin");
			LocalStorage.remove("token");
			navigate("/user");
		}
	}, [isAdmin]);

	return <div>{children}</div>;
};

export default CheckProtectedRoute;
