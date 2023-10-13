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
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import { Navigate } from "react-router-dom";
import CreateUpdateHackathon from "../components/CreateUpdateHackathon";
import Live from "../pages/hackathonLive";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/user" />,
		children: [],
	},

	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
	{
		path: "/user",
		element: (
			// <CheckProtectedRoute roleArg="user">
			<User />
			// </CheckProtectedRoute>
		),
	},

	{
		path: "/admin",
		element: (
			// <CheckProtectedRoute roleArg="admin">
			<Admin />
			// </CheckProtectedRoute>
		),
	},
	{
		path: "/admin/new",
		element: <CreateUpdateHackathon />,
	},

	{
		path: "/dashboard",
		element: (
			// <CheckProtectedRoute roleArg="user">
			<User />
			// </CheckProtectedRoute>
		),
	},
	{
		path: "/register",
		element: (
			// <CheckProtectedRoute roleArg="user">
			<Registration />
			// </CheckProtectedRoute>
		),
	},
	{
		path: "/hackathon/:name/:id",
		element: (
			// <CheckProtectedRoute roleArg="user">
			<HackathonDetails />
			// </CheckProtectedRoute>
		),
	},
	{
		path: "/hackathon/:name/:id/:status",
		element: (
			<CheckProtectedRoute role="user">
				<Live />
			</CheckProtectedRoute>
		),
	},
]);

export default router;
