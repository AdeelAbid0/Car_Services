import Unauthorized from "../../shared/pages/Unauthorized";
import PublicRoutes from "../PublicRoutes";

export const UNAUTHORIZED_ROUTES = [
  {
    path: "/unauthorized",
    element: (
      <PublicRoutes>
        <Unauthorized />
      </PublicRoutes>
    ),
  },
];
