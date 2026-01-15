import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PublicRoutes from "../PublicRoutes";

const About = lazy(() => "../../Pages/About/About");
const Contact = lazy(() => "../../Pages/Contact/Contact");
const FAQ = lazy(() => "../../Pages/FAQ/FAQ");
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
    path: ROUTES.ABOUT,
    element: (
      <PublicRoutes>
        <About />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.CONTACT,
    element: (
      <PublicRoutes>
        <Contact />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.FAQs,
    element: (
      <PublicRoutes>
        <FAQ />
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
