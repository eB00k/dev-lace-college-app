import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import BaseLayout from "../components/layouts/BaseLayout";
import AboutPage from "../pages/about/AboutPage";
import Academics from "../pages/academics/Academics";

// Define the router configuration
const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
