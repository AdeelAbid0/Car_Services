import { lazy } from "react";
import { ROUTES } from "../../../constants/routes";
import PublicRoutes from "../../PublicRoutes";
const Home = lazy(() => import("../../features/public/pages/Home"));
export const LANDINGPAGE_ROUTES = [
  {
    path: ROUTES.HOME,
    element: (
      <PublicRoutes>
        <Home />
      </PublicRoutes>
    ),
  },
];
