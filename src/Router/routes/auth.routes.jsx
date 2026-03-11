import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PublicRoutes from "../PublicRoutes";
// Lazy load components
const Login = lazy(() => import("../../Pages/Login/Login"));
const Register = lazy(() => import("../../Pages/Register/Register"));
const RegisterPartner = lazy(
  () => import("../../Pages/Partners/RegisterPartner/RegisterPartner"),
);
const VerifyOTP = lazy(() => import("../../Pages/VerifyOTP/VerifyOTP"));
const Join = lazy(() => import("../../Pages/Join/Join"));
export const AUTH_ROUTES = [
  {
    path: ROUTES.LOGIN,
    element: (
      <PublicRoutes>
        <Login />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.REGISTER_USER,
    element: (
      <PublicRoutes>
        <Register />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.PARTNER_REGISTER,
    element: (
      <PublicRoutes>
        <RegisterPartner />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.VERIFY_OTP,
    element: (
      <PublicRoutes>
        <VerifyOTP />
      </PublicRoutes>
    ),
  },
  {
    path: ROUTES.JOIN,
    element: (
      <PublicRoutes>
        <Join />
      </PublicRoutes>
    ),
  },
];
