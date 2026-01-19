import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PrivateRoutes from "../PrivateRoutes";

const PartnerDashboard = lazy(
  () => import("../../Pages/Dashboard/PartnerDashboard"),
);
const Manage_Services = lazy(
  () => import("../../Pages/Manage_Services/Manage_Services"),
);

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
];
