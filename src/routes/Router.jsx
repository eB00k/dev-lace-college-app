import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "../pages/home/Home";
import BaseLayout from "../components/layouts/BaseLayout";
import AboutPage from "../pages/about/AboutPage";
import Academics from "../pages/academics/Academics";
import Spinner from "../components/spinner/Spinner";

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
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Router;
