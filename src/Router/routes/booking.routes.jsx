import { ROUTES } from "../../constants/routes";
import { lazy } from "react";
import PrivateRoutes from "../PrivateRoutes";

const My_Wallet = lazy(() => import("../../Pages/My_Wallet/My_Wallet"));
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
  {
    path: ROUTES.MY_WALLET,
    element: (
      <PrivateRoutes>
        <My_Wallet />
      </PrivateRoutes>
    ),
  },
];
