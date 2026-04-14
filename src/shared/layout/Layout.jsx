import { useLocation, useRoutes } from "react-router-dom";
import Header from "./Header";
import BottomNavigation from "../components/common/BottomNavigation";
import { useEffect, useState } from "react";
import { appRoutes } from "../../router/index";
import { useSelector } from "react-redux";
import { AUTH_ROUTES } from "../../router/routes";

const Layout = () => {
  const { user, token } = useSelector(state => state.auth);
  const [isAuthRoute, setIsAuthRoute] = useState(false);
  const location = useLocation();
  const auth_routes = AUTH_ROUTES;
  const Routes = useRoutes(appRoutes);

  useEffect(() => {
    const isCurrentPathAuthRoute = auth_routes?.some(
      route => route.path === location.pathname
    );
    setIsAuthRoute(isCurrentPathAuthRoute);
  }, [location, auth_routes]);

  return (
    <div className="relative w-full bg-background">
      {!isAuthRoute && (
        <div className="w-full fixed z-40">
          <Header user={user} token={token} />
        </div>
      )}

      <div
        className={`h-[calc(100vh-87px)] md:h-[calc(100vh-87px)] ${isAuthRoute ? "mt-0" : "mt-16 md:mt-21.75 mb-20 md:mb-0 overflow-y-auto"}`}
      >
        {Routes}
      </div>

      {!isAuthRoute && <BottomNavigation />}
    </div>
  );
};

export default Layout;
