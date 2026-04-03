import { ROUTES } from "../../constants/routes";
import { lazy } from "react";
import PrivateRoutes from "../PrivateRoutes";
import { ROLES } from "../../constants/roles";

const My_Wallet = lazy(
  () => import("../../features/customers/pages/My_Wallet"),
);
const Bookings = lazy(() => import("../../features/customers/pages/Bookings"));

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
