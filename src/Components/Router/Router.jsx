import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Donation from "../pages/Donation";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Root from "../Roots/Root";
import DonationDetails from "../DonationDetails/DonationDetails";
import Error from "../ErrorElements/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation/:id",
        element: <DonationDetails />,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default router;
