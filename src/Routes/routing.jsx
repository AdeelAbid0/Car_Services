import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import VerifyOTP from "../Pages/VerifyOTP/VerifyOTP";

export const PublicRoutes = {
  default: {
    id: 1,
    path: "/",
    component: LandingPage,
  },
  Login: {
    id: 2,
    path: "/login",
    component: Login,
  },
  Register: {
    id: 3,
    path: "/register",
    component: Register,
  },
  VerifyOTP: {
    id: 4,
    path: "/verify-otp",
    component: VerifyOTP,
  },
};
