import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PublicRoutes from "../PublicRoutes";
import { ROLES } from "../../constants/roles";
import PrivateRoutes from "../PrivateRoutes";
const NotFound = lazy(() => import("../../shared/pages/NotFound"));
const Home = lazy(() => import("../../features/public/pages/Home"));
const FAQ = lazy(() => import("../../features/customers/pages/FAQ"));
const About = lazy(() => import("../../features/customers/pages/About"));
const Contact = lazy(() => import("../../features/customers/pages/Contact"));
const Services = lazy(() => import("../../features/customers/pages/Services"));
const Partners = lazy(() => import("../../features/customers/pages/Partners"));

export const LANDINGPAGE_ROUTES = [
  {
    path: ROUTES.HOME,
    element: (
      <PublicRoutes>
        <Home />
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
