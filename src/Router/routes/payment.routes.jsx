import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PrivateRoutes from "../PrivateRoutes";
import { ROLES } from "../../constants/roles";
const SelectPaymentMethod = lazy(
  () => import("../../pages/Customers/SelectPaymentMethod/SelectPaymentMethod"),
);
export const PAYMENT_ROUTES = [
  {
    path: ROUTES.PAYMENT,
    element: (
      <PrivateRoutes allowedRoles={[ROLES.CUSTOMER]}>
        <SelectPaymentMethod />
      </PrivateRoutes>
    ),
  },
];
