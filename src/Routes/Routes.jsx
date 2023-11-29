import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllProperties from "../Pages/AllProperties/AllProperties";
import SinglePropertie from "../Pages/AllProperties/SinglePropertie";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/allProperties",
          element: <AllProperties />,
        },
        {
          path: "/properties/:id",
          element: <SinglePropertie />,
          loader: ({params})=> fetch(`http://localhost:5000/properties/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ],
    },
  ]);