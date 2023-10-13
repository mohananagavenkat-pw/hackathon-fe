/** @format */

import { createBrowserRouter } from "react-router-dom";
import User from "../pages/user";
import Admin from "../pages/admin";
import CheckProtectedRoute from "../hoc/CheckProtectedRoute";
import HackathonDetails from "../pages/hackathon";
import Registration from "../pages/user/Registration";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import { Navigate } from "react-router-dom";

import Live from "../pages/hackathonLive";
import CreateEditHackathon from "../pages/admin/CreateEditHackathon";
import HackathonTeamViewPage from "../components/Admin/HackathonTeamViewPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/user" />,
		children: [],
	},

	{
		path: "/signin",
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
		path: "/admin/create-hackathon",
		element: <CreateEditHackathon />,
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
			//   <CheckProtectedRoute role="user">
			<Live />
			//   </CheckProtectedRoute>
		),
	},
	{
		path: "/admin/hackathon/hackathonId/:hackathonId/questionId/:questionId",
		element: (
			// <CheckProtectedRoute roleArg="user">
			<HackathonTeamViewPage />
			// </CheckProtectedRoute>
		),
	},
	{
		path: "/admin/hackathon/:name/:id",
		element: (
			// <CheckProtectedRoute roleArg="user">
			<Live />
			// </CheckProtectedRoute>
		),
	},
]);

export default router;
