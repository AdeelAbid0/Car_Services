import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PrivateRoutes from "../PrivateRoutes";
import { ROLES } from "../../constants/roles";
const Dashboard = lazy(
  () => import("../../features/superadmin/pages/Dashboard"),
);
const Services = lazy(() => import("../../features/superadmin/pages/Services"));
const Partners = lazy(() => import("../../features/superadmin/pages/Partners"));
const Profile = lazy(() => import("../../features/superadmin/pages/Profile"));

export const SUPERADMIN_ROUTES = [
  {
    path: ROUTES.SUPERADMIN_DASHBOARD,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.SUPERADMIN]}>
        <Dashboard />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.SUPERADMIN_SERVICES,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.SUPERADMIN]}>
        <Services />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.SUPERADMIN_PARTNERS,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.SUPERADMIN]}>
        <Partners />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.SUPERADMIN_PROFILE,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.SUPERADMIN]}>
        <Profile />
      </PrivateRoutes>
    ),
  },
];
