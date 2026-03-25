import { useLocation, useRoutes } from "react-router-dom";
import { appRoutes } from "../Router";
import Header from "./Header";
import { useEffect, useState } from "react";
import { AUTH_ROUTES } from "../Router/routes";

const Layout = () => {
  const [isAuthRoute, setIsAuthRoute] = useState(false);
  const location = useLocation();
  const auth_routes = AUTH_ROUTES;

  const Routes = useRoutes(appRoutes);

  useEffect(() => {
    const isCurrentPathAuthRoute = auth_routes?.some(
      (route) => route.path === location.pathname,
    );
    setIsAuthRoute(isCurrentPathAuthRoute);
  }, [location, auth_routes]);

  return (
    <div className="relative w-full bg-background">
      {!isAuthRoute && (
        <div className="w-full fixed z-40">
          <Header />
        </div>
      )}

      <div
        className={`h-[calc(100vh-87px)]  ${isAuthRoute ? "mt-0" : "mt-21.75 overflow-y-auto"}`}
      >
        {Routes}
      </div>
    </div>
  );
};

export default Layout;
