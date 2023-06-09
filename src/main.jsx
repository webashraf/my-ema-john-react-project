import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Checkout from "./comonents/Checkout/Checkout";
import cardLoaderData from "./comonents/JS/cardLoaderData";
import Order from "./comonents/Order/Order";
import Shop from "./comonents/Shop/Shop";
import "./index.css";
import Login from "./comonents/LoginPage/Login";
import SignUp from "./comonents/SignUpPage/SignUp";
import AuthProvider from "./comonents/provider/AuthProvider";
import PrivateRoute from "./comonents/route/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
        loader: () => fetch("http://localhost:4000/totalProducts")
      },
      {
        path: "order",
        element: <Order />,
        loader: cardLoaderData,
      },
      {
        path: "morder",
        element: <div>Manage Order page</div>,
      },
      {
        path: "inventory",
        element: <div>Inventory page</div>,
      },
      {
        path: "checkout",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
      },
      { 
        path: "login",
        element: <Login></Login>,
      },
      { 
        path: "signin",
        element: <SignUp></SignUp>,
      },

    ],
  },
  {
    path: "*",
    element: <div>Error page</div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
