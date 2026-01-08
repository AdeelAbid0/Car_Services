import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PublicRoutes from "../PublicRoutes";

const LandingPage = lazy(() => import("../../Pages/LandingPage/LandingPage"));
const Services = lazy(() => import("../../Pages/Services/Services"));
const Partners = lazy(() => import("../../Pages/Partners/Partners"));

export const LANDINGPAGE_ROUTES = [
  {
    path: ROUTES.HOME,
    element: (
      <PublicRoutes>
        <LandingPage />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.SERVICES,
    element: (
      <PublicRoutes>
        <Services />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.PARTNERS,
    element: (
      <PublicRoutes>
        <Partners />
      </PublicRoutes>
    ),
  },
  {
    path: "*",
    element: (
      <PublicRoutes>
        <LandingPage />
      </PublicRoutes>
    ),
  },
];
