import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PrivateRoutes from "../PrivateRoutes";
import Manage_Services from "../../Pages/Partners/Manage_Services/Manage_Services";
import Profile_Partner from "../../Pages/Partners/Profile_Partner/Profile_Partner";
import Payments_Partner from "../../Pages/Partners/Payments_Partner/Payments_Partner";
import Support from "../../Pages/Partners/Support/Support";
import PartnerDashboard from "../../Pages/Partners/Dashboard/PartnerDashboard";
import { ROLES } from "../../constants/roles";

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
