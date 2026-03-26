import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PublicRoutes from "../PublicRoutes";
import { ROLES } from "../../constants/roles";

const About = lazy(() => import("../../Pages/Customers/About/About"));
const Contact = lazy(() => import("../../Pages/Customers/Contact/Contact"));
const FAQ = lazy(() => import("../../Pages/Customers/FAQ/FAQ"));
const LandingPage = lazy(() => import("../../Pages/LandingPage/LandingPage"));
const Services = lazy(() => import("../../Pages/Customers/Services/Services"));
const Partners = lazy(() => import("../../Pages/Customers/Partners/Partners"));

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
      <PublicRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Services />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.PARTNERS,
    element: (
      <PublicRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Partners />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.ABOUT,
    element: (
      <PublicRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <About />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.CONTACT,
    element: (
      <PublicRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Contact />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.FAQs,
    element: (
      <PublicRoutes allowedRoles={[ROLES.CUSTOMER]}>
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
