import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../layouts/ErrorPage";
import Home from "../layouts/Home";
import Register from "../layouts/Register";
import Login from "../layouts/Login";
import CreateAssignment from "../layouts/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Assignments from "../layouts/Assignments";
import UpdateAssignment from "../layouts/UpdateAssignment";
import AssignmentDetails from "../layouts/AssignmentDetails";
import PendingAssignments from "../layouts/PendingAssignments";
import MyAttemptedAssignments from "../layouts/MyAttemptedAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-assignments",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/assignments/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-circle-server-five.vercel.app/assignments/${params.id}`
          ),
      },
      {
        path: "/assignment-details/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-circle-server-five.vercel.app/assignments/${params.id}`
          ),
      },
      {
        path: "/pending-assignments",
        element: (
          <PrivateRoute>
            <PendingAssignments />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://study-circle-server-five.vercel.app/assignment-submission"
          ),
      },
      {
        path: "/my-assignments",
        element: (
          <PrivateRoute>
            <MyAttemptedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
