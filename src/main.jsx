import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // children:[
    //   {
    //     path: '/',
    //     element: <Home></Home>
    //   },
    // //   {
    //     path: ,
    //     element:
    //   },
    //   {
    //     path: ,
    //     element:
    //   },
    //   {
    //     path: ,
    //     element:
    //   },
    //   {
    //     path: ,
    //     element:
    //   },
    // ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
