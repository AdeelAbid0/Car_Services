import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PublicRoutes from "../PublicRoutes";
import { ROLES } from "../../constants/roles";

const Profile = lazy(
  () => import("../../pages/Customers/pages/Profile/Profile"),
);

export const PROFILE_ROUTES = [
  {
    path: ROUTES.PROFILE,
    element: (
      <PublicRoutes>
        <Profile allowedRoles={[ROLES.CUSTOMER]} />
      </PublicRoutes>
    ),
  },
];
