import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PrivateRoutes from "../PrivateRoutes";
import Manage_Services from "../../Pages/Partners/Manage_Services/Manage_Services";
import Profile_Partner from "../../Pages/Partners/Profile_Partner/Profile_Partner";
import Payments_Partner from "../../Pages/Partners/Payments_Partner/Payments_Partner";
import Support from "../../Pages/Partners/Support/Support";
import PartnerDashboard from "../../Pages/Partners/Dashboard/PartnerDashboard";

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
