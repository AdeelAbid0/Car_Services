import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PrivateRoutes from "../PrivateRoutes";
import { ROLES } from "../../constants/roles";
import Manage_Services from "../../features/partners/pages/Manage_Services";
import Profile_Partner from "../../features/partners/pages/Profile_Partner";
import Payments_Partner from "../../features/partners/pages/Payments_Partner";
import Support from "../../features/partners/pages/Support";
import PartnerDashboard from "../../features/partners/pages/PartnerDashboard";

export const PARTNER_ROUTES = [
  {
    path: ROUTES.PARTNER_DASHBOARD,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.PARTNER]}>
        <PartnerDashboard />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.PARTNER_MANAGE_SERVICES,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.PARTNER]}>
        <Manage_Services />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.PARTNER_PROFILE,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.PARTNER]}>
        <Profile_Partner />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.PARTNER_PAYMENT,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.PARTNER]}>
        <Payments_Partner />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.PARTNER_SUPPORT,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.PARTNER]}>
        <Support />
      </PrivateRoutes>
    ),
  },
];
