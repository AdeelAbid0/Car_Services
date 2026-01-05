import { lazy } from "react";
import { ROUTES } from "../../constants/routes";

const Login = lazy(() => import("../../Pages/Login/Login"));
const Register = lazy(() => import("../../Pages/Register/Register"));
const RegisterPartner = lazy(() =>
  import("../../Pages/RegisterPartner/RegisterPartner")
);

const VerifyOTP = lazy(() => import("../../Pages/VerifyOTP/VerifyOTP"));

export const AUTH_ROUTES = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER_USER,
    element: <Register />,
  },
  {
    path: ROUTES.PARTNER_REGISTER,
    element: <RegisterPartner />,
  },
  {
    path: ROUTES.VERIFY_OTP,
    element: <VerifyOTP />,
  },
];
