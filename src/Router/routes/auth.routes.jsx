import { lazy } from "react";
import { ROUTES } from "../../constants/routes";
import PublicRoutes from "../PublicRoutes";
// Lazy load components
const Login = lazy(() => import("../../pages/Auth/Login/Login"));
const Register = lazy(() => import("../../pages/Auth/Register/Register"));
const RegisterPartner = lazy(
  () => import("../../pages/Partners/RegisterPartner/RegisterPartner"),
);
const VerifyOTP = lazy(() => import("../../pages/Auth/VerifyOTP/VerifyOTP"));
const Join = lazy(() => import("../../pages/Auth/Join/Join"));
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
