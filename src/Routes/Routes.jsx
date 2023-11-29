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
          path: "/allPropertie/:id",
          element: <SinglePropertie />,
          loader:()=>fetch('/allProperties.json')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
      ],
    },
  ]);