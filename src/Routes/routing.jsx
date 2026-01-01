import Services from "../Components/HeroSection/Components/Services";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import Packages from "../Pages/Packages/Packages";
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
  // Services: {
  //   id: 5,
  //   path: "/services",
  //   component: Services,
  // },
  // Packages: {
  //   id: 6,
  //   path: "/packages",
  //   component: Packages,
  // },
};
