import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PrivateRoutes from "../PrivateRoutes";
import { ROLES } from "../../constants/roles";
const Dashboard = lazy(
  () => import("../../Pages/SuperAdmin/Dashboard/Dashboard"),
);
const Services = lazy(() => import("../../Pages/SuperAdmin/Services/Services"));
const Partners = lazy(() => import("../../Pages/SuperAdmin/Partners/Partners"));
const Profile = lazy(() => import("../../Pages/SuperAdmin/Profile/Profile"));

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
