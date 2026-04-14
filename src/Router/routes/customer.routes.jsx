import { lazy } from "react";
import { ROUTES } from "../../constants/routes-alpha";
import PublicRoutes from "../PublicRoutes";
import { ROLES } from "../../constants/roles";
import PrivateRoutes from "../PrivateRoutes";
const NotFound = lazy(() => import("../../shared/pages/NotFound"));
const FAQ = lazy(() => import("../../features/customers/pages/FAQ"));
const About = lazy(() => import("../../features/customers/pages/About"));
const Contact = lazy(() => import("../../features/customers/pages/Contact"));
const Services = lazy(() => import("../../features/customers/pages/Services"));
const Partners = lazy(() => import("../../features/customers/pages/Partners"));
const My_Wallet = lazy(
  () => import("../../features/customers/pages/My_Wallet")
);
const SelectPaymentMethod = lazy(
  () => import("../../features/customers/pages/SelectPaymentMethod")
);
const Bookings = lazy(() => import("../../features/customers/pages/Bookings"));
const Profile = lazy(() => import("../../features/customers/pages/Profile"));

export const CUSTOMER_ROUTES = [
  {
    path: ROUTES.SERVICES,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Services />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.PARTNERS,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Partners />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.BOOKINGS,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Bookings />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.MY_WALLET,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <My_Wallet />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.PAYMENT,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <SelectPaymentMethod />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.PROFILE,
    element: (
      <PrivateRoutes>
        <Profile allowedRoles={[ROLES.CUSTOMER]} />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.ABOUT,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <About />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.CONTACT,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Contact />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.FAQs,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <FAQ />
      </PrivateRoutes>
    )
  },
  {
    path: "*",
    element: (
      <PublicRoutes>
        <NotFound />
      </PublicRoutes>
    )
  }
];
