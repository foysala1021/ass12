import { createBrowserRouter } from "react-router-dom";
import Home from "../../Conmopent/Home/Home/Home";
import Addproduct from "../../Conmopent/Page/Addproduct/Addproduct";

import Blog from "../../Conmopent/Page/Blog/Blog";
import BrandDetails from "../../Conmopent/Page/BrandDetails/BrandDetails";
import Dashboard from "../../Conmopent/Page/Dashboard/Dashboard";
import Login from "../../Conmopent/Page/Login/Login";
import Myproduct from "../../Conmopent/Page/Myproduct/Myproduct";
import PhoneDetails from "../../Conmopent/Page/PhoneDetails/PhoneDetails";
import Register from "../../Conmopent/Page/Register/Register";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/brand/:id",
        element: <BrandDetails></BrandDetails>,
        loader: async ({ params }) => {
          const data = fetch(
            `http://localhost:5000/brand-details/${params.id}`
          );
          return data;
        },
      },
      {
        path: "/phone-details/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: async ({ params }) => {
          const data = fetch(
            `http://localhost:5000/phone-details/${params.id}`
          );
          return data;
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/addproduct",
        element: <Addproduct></Addproduct>,
      },
      {
        path: "/dashboard/my-product",
        element: <Myproduct></Myproduct>,
      },
    ],
  },
]);
