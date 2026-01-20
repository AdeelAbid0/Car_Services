import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PrivateRoutes from "../PrivateRoutes";
const PartnerDashboard = lazy(
  () => import("../../Pages/Dashboard/PartnerDashboard"),
);
const Manage_Services = lazy(
  () => import("../../Pages/Manage_Services/Manage_Services"),
);
const Profile_Partner = lazy(
  () => import("../../Pages/Profile_Partner/Profile_Partner"),
);
const Payments_Partner = lazy(
  () => import("../../Pages/Payments_Partner/Payments_Partner"),
);
const Support = lazy(() => import("../../Pages/Support/Support"));

export const PARTNER_ROUTES = [
  {
    path: ROUTES.PARTNER_DASHBOARD,
    element: (
      <PrivateRoutes>
        <PartnerDashboard />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.PARTNER_MANAGE_SERVICES,
    element: (
      <PrivateRoutes>
        <Manage_Services />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.PARTNER_PROFILE,
    element: (
      <PrivateRoutes>
        <Profile_Partner />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.PARTNER_PAYMENT,
    element: (
      <PrivateRoutes>
        <Payments_Partner />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.PARTNER_SUPPORT,
    element: (
      <PrivateRoutes>
        <Support />
      </PrivateRoutes>
    ),
  },
];
