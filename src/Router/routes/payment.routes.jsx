import { ROUTES } from "../../constants/routes";
import SelectPaymentMethod from "../../Pages/SelectPaymentMethod/SelectPaymentMethod";
import PrivateRoutes from "../PrivateRoutes";

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
