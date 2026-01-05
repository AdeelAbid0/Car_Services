import { useRoutes } from "react-router-dom";
import { appRoutes } from "../Router/routes";

const Layout = () => {
  const Routes = useRoutes(appRoutes);
  return Routes;
};

export default Layout;
