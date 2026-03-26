import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PublicRoutes from "../PublicRoutes";
import { ROLES } from "../../constants/roles";
import PrivateRoutes from "../PrivateRoutes";
import NotFound from "../../pages/Common/NotFound";

const About = lazy(() => import("../../pages/Customers/About/About"));
const Contact = lazy(() => import("../../pages/Customers/Contact/Contact"));
const FAQ = lazy(() => import("../../pages/Customers/FAQ/FAQ"));
const LandingPage = lazy(() => import("../../pages/LandingPage/LandingPage"));
const Services = lazy(() => import("../../pages/Customers/Services/Services"));
const Partners = lazy(() => import("../../pages/Customers/Partners/Partners"));

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
