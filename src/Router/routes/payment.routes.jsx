import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PrivateRoutes from "../PrivateRoutes";
const SelectPaymentMethod = lazy(
  () => import("../../Pages/Customers/SelectPaymentMethod/SelectPaymentMethod"),
);
export const PAYMENT_ROUTES = [
  {
    path: ROUTES.PAYMENT,
    element: (
      <PrivateRoutes>
        <SelectPaymentMethod />
      </PrivateRoutes>
    ),
  },
];
