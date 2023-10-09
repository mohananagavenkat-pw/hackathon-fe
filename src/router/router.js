/** @format */

import { createBrowserRouter } from "react-router-dom";
import User from "../pages/user";
import Admin from "../pages/admin";
import CheckProtectedRoute from "../hoc/CheckProtectedRoute";
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
]);

export default router;
