import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";
import Home from "../pages/home/Home";
import BaseLayout from "../components/layouts/BaseLayout";
import AboutPage from "../pages/about/AboutPage";
import Academics from "../pages/academics/Academics";
import Admission from "../pages/admission/Admission";
import Spinner from "../components/spinner/Spinner";
import ThankYou from "../pages/thank-you/ThankYou";
import CareerTestPage from "../pages/careertest/CareerTest";
import NotFound from "../pages/not-found/NotFound";

// Initialize Google Analytics
ReactGA.initialize("G-2M2GPPXSPW");

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
      {
        path: "/career-test",
        element: <CareerTestPage />,
      },
      {
        path: "/admissions",
        element: <Admission />,
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
      },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function GAListener() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}

function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router}>
        <GAListener />
      </RouterProvider>
    </Suspense>
  );
}

export default Router;
