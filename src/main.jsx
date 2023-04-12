import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Statistics from "./Components/Statistics/Statistics";
import Jobs from "./Components/Jobs/Jobs";
import Details from "./Components/Details/Details";
import  { appliedData,jobDetails } from "./Components/dainamicDetails/loadAndFindDetailsData";
import Error from "./Components/Error/Error";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:'job-details/:id' ,
        element:<Details></Details>,
        loader:({params})=> jobDetails(params.id),
        errorElement:<Error></Error>
        
        

      },
        {
          path: 'applied-jobs',
          element:<AppliedJobs></AppliedJobs>,
          loader:appliedData
        },
    ],
  },
  {
    path:"*",
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
