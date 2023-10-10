/** @format */

import { createBrowserRouter } from "react-router-dom";
import User from "../pages/user";
import Admin from "../pages/admin";
import CheckProtectedRoute from "../hoc/CheckProtectedRoute";
import Homepage from "../components/Homepage";
import Registration from "../pages/user/Registration";

const router = createBrowserRouter([
	{
		path: "/",
		element: <User />,
	},
	{
		path: "/admin",
		element: (
			<CheckProtectedRoute role="admin">
				<Admin />
			</CheckProtectedRoute>
		),

		children: [{}],
	},
	{
		path: "/user",
		element: (
			<CheckProtectedRoute role="admin">
				<User />
			</CheckProtectedRoute>
		),
	},
	{
		path: "/dashboard",
		element: (
			<CheckProtectedRoute role="user">
				<Homepage />
			</CheckProtectedRoute>
		),
	},
	{
		path: "/register",
		element: (
			<CheckProtectedRoute role="user">
				<Registration />
			</CheckProtectedRoute>
		),
	},
]);

export default router;
