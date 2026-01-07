import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
const LandingPage = lazy(() => import("../../Pages/LandingPage/LandingPage"));
const Services = lazy(() => import("../../Pages/Services/Services"));
const Partners = lazy(() => import("../../Pages/Partners/Partners"));

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
    path: ROUTES.PARTNERS,
    element: <Partners />,
  },
  {
    path: "*",
    element: <LandingPage />,
  },
];
