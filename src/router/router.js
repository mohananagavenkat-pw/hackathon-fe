/** @format */

import { createBrowserRouter } from "react-router-dom";
import User from "../pages/user";
import Admin from "../pages/admin";
import CheckProtectedRoute from "../hoc/CheckProtectedRoute";
import Homepage from "../components/Homepage";
import ApplicationTab from "../components/ApplicationTab";
import { Typography } from "@mui/material";
import HackathonDetails from "../pages/hackathon";
import Registration from "../pages/user/Registration";
import Live from "../pages/hackathonLive";

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
				<User />
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
	{
		path: "/hackathon/:name/:id",
		element: (
			<CheckProtectedRoute role="user">
				<HackathonDetails />
			</CheckProtectedRoute>
		),
	},
	{
		path: "/hackathon/:name/:id/live",
		element: (
			<CheckProtectedRoute role="user">
				<Live />
			</CheckProtectedRoute>
		),
	},
]);

export default router;
