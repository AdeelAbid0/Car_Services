import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PublicRoutes from "../PublicRoutes";
import { ROLES } from "../../constants/roles";
import PrivateRoutes from "../PrivateRoutes";
import NotFound from "../../Pages/Common/NotFound";

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
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Services />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.PARTNERS,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Partners />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.ABOUT,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <About />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.CONTACT,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Contact />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.FAQs,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <FAQ />
      </PrivateRoutes>
    ),
  },
  {
    path: "*",
    element: (
      <PublicRoutes>
        <NotFound />
      </PublicRoutes>
    ),
  },
];
