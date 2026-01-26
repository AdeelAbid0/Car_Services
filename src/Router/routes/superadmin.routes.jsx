import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PrivateRoutes from "../PrivateRoutes";
const Dashboard = lazy(
  () => import("../../Pages/SuperAdmin/Dashboard/Dashboard"),
);
const Services = lazy(() => import("../../Pages/SuperAdmin/Services/Services"));
const Partners = lazy(() => import("../../Pages/SuperAdmin/Partners/Partners"));

export const SUPERADMIN_ROUTES = [
  {
    path: ROUTES.SUPERADMIN_DASHBOARD,
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.SUPERADMIN_SERVICES,
    element: (
      <PrivateRoutes>
        <Services />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.SUPERADMIN_PARTNERS,
    element: (
      <PrivateRoutes>
        <Partners />
      </PrivateRoutes>
    ),
  },
];
