import { lazy } from "react";
import { ROUTES } from "../../constants/routes-alpha";
import PublicRoutes from "../PublicRoutes";
const Home = lazy(() => import("../../features/public/pages/Home"));
import Unauthorized from "../../shared/pages/Unauthorized";
export const PUBLIC_ROUTES = [
  {
    path: ROUTES.HOME,
    element: (
      <PublicRoutes>
        <Home />
      </PublicRoutes>
    )
  },
  {
    path: "/unauthorized",
    element: (
      <PublicRoutes>
        <Unauthorized />
      </PublicRoutes>
    )
  }
];
