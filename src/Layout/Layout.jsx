import { useLocation, useRoutes } from "react-router-dom";
import { appRoutes } from "../Router";
import Header from "./Header";
import { useEffect, useState } from "react";
import { AUTH_ROUTES } from "../Router/routes";

const Layout = () => {
  const [currentPath, setCurrentPath] = useState();
  const location = useLocation();
  const auth_routes = AUTH_ROUTES;

  const Routes = useRoutes(appRoutes);
  useEffect(() => {
    const currentRoute = auth_routes?.find(
      (item) => item.path === location.pathname
    );
    setCurrentPath(currentRoute);
  }, [location]);
  return (
    <div className="relative w-full bg-[#F5F5F5]">
      {!currentPath && (
        <div className="w-full fixed z-50">
          <Header />
        </div>
      )}
      <div className="h-[calc(100vh-87px)]">{Routes}</div>
    </div>
  );
};

export default Layout;
