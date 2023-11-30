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
import Dashboard from "../LayOut/Dashboard";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import ManageProperty from "../Pages/Dashboard/ManageProperty";
import WishList from "../Pages/Dashboard/WishList/WishList";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddProperty from "../Pages/Dashboard/AddProperty/AddProperty";

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
          element: <PrivateRoute><SinglePropertie /></PrivateRoute>,
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
    {
      path:'dashboard',
      element:<Dashboard/>,
      children:[
        // normal user routes
        {
          path:'wishList',
          element:<WishList/>
        },
        {
          path:'myProfile',
          element:<MyProfile/>
        },
        // admin only routes

        // {
        //   path:'addItems',
        //   element:<AdminRoute><AddItems/></AdminRoute>
          
        // },
        {
          path:'manageProperties',
          element:<AdminRoute><ManageProperty/></AdminRoute>,  
        },
        // {
        //   path:'updateItem/:id',
        //   element:<AdminRoute><UpdateItem/></AdminRoute>,
        //   loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
    
        // },
        {
          path:'manageUsers',
          element:<AdminRoute><AllUsers/></AdminRoute>
        },

        //agent routes
        {
          path:'addProperty',
          element:<AddProperty/>
          
        },

      ]
    }
  ]);