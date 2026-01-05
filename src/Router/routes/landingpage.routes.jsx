import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
const LandingPage = lazy(() => import("../../Pages/LandingPage/LandingPage"));
const Services = lazy(() => import("../../Pages/Services/Services"));
const Packages = lazy(() => import("../../Pages/Packages/Packages"));

export const LANDINGPAGE_ROUTES = [
  {
    path: ROUTES.HOME,
    element: <LandingPage />,
  },
  {
    path: ROUTES.SERVICES,
    element: <Services />,
  },
  {
    path: ROUTES.PACKAGES,
    element: <Packages />,
  },
  {
    path: "*",
    element: <LandingPage />,
  },
];
