import Unauthorized from "../../Pages/Common/Unauthorized";
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
