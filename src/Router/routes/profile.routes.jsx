import { ROUTES } from "../../constants/routes";
import Profile from "../../Pages/Profie/Profile";
import PublicRoutes from "../PublicRoutes";

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
