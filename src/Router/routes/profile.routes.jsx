import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PublicRoutes from "../PublicRoutes";

const Profile = lazy(() => import("../../Pages/Profie/Profile"));

export const PROFILE_ROUTES = [
  {
    path: ROUTES.PROFILE,
    element: (
      <PublicRoutes>
        <Profile />
      </PublicRoutes>
    ),
  },
];
