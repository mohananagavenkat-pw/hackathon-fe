/** @format */

import { createBrowserRouter } from "react-router-dom";
import User from "../pages/user";
import Admin from "../pages/admin";
import CheckProtectedRoute from "../hoc/CheckProtectedRoute";
import Homepage from "../components/Homepage";
import ApplicationTab from "../components/ApplicationTab";
import { Typography } from "@mui/material";
import HackathonDetails from "../pages/hackathon";


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
    path: "/hackathon/:name/:id",
    element: (
      <CheckProtectedRoute role="user">
        <HackathonDetails />
      </CheckProtectedRoute>
    ),
  },
]);

export default router;
