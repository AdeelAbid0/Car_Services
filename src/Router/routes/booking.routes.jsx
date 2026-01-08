import { ROUTES } from "../../constants/routes";
import { lazy } from "react";
import PrivateRoutes from "../PrivateRoutes";

const Bookings = lazy(() => import("../../Pages/Bookings/Bookings"));

export const BOOKING_ROUTES = [
  {
    path: ROUTES.BOOKINGS,
    element: (
      <PrivateRoutes>
        <Bookings />
      </PrivateRoutes>
    ),
  },
];
