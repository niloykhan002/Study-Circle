import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../layouts/ErrorPage";
import Home from "../layouts/Home";
import Register from "../layouts/Register";
import Login from "../layouts/Login";
import CreateAssignment from "../layouts/CreateAssignment";
import PrivateRoute from "./PrivateRoute";

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
