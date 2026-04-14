import { lazy } from "react";
import { ROUTES } from "../../constants/routes-alpha";
import PrivateRoutes from "../PrivateRoutes";
import { ROLES } from "../../constants/roles";

const Manage_Services = lazy(
  () => import("../../features/partners/pages/Manage_Services")
);
const Profile_Partner = lazy(
  () => import("../../features/partners/pages/Profile_Partner")
);
const Payments_Partner = lazy(
  () => import("../../features/partners/pages/Payments_Partner")
);
const Support = lazy(() => import("../../features/partners/pages/Support"));
const PartnerDashboard = lazy(
  () => import("../../features/partners/pages/PartnerDashboard")
);

export const PARTNER_ROUTES = [
  {
    path: ROUTES.PARTNER_DASHBOARD,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.PARTNER]}>
        <PartnerDashboard />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.PARTNER_MANAGE_SERVICES,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.PARTNER]}>
        <Manage_Services />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.PARTNER_PROFILE,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.PARTNER]}>
        <Profile_Partner />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.PARTNER_PAYMENT,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.PARTNER]}>
        <Payments_Partner />
      </PrivateRoutes>
    )
  },
  {
    path: ROUTES.PARTNER_SUPPORT,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.PARTNER]}>
        <Support />
      </PrivateRoutes>
    )
  }
];
