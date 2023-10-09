/** @format */

import { Navigate } from "react-router-dom";

const CheckProtectedRoute = ({ children, role }) => {
	const token = "";
	if (!token === role) {
		return <Navigate to="/login" />;
	}
	return children;
};

export default CheckProtectedRoute;
