import { ROUTES } from "../../constants/routes";
import { lazy } from "react";
import PrivateRoutes from "../PrivateRoutes";
import { ROLES } from "../../constants/roles";

const My_Wallet = lazy(
  () => import("../../pages/Customers/My_Wallet/My_Wallet"),
);
const Bookings = lazy(() => import("../../pages/Customers/Bookings/Bookings"));

export const BOOKING_ROUTES = [
  {
    path: ROUTES.BOOKINGS,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <Bookings />
      </PrivateRoutes>
    ),
  },
  {
    path: ROUTES.MY_WALLET,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <My_Wallet />
      </PrivateRoutes>
    ),
  },
];
