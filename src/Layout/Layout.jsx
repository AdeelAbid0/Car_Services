import { useRoutes } from "react-router-dom";
import { appRoutes } from "../Router";

const Layout = () => {
  const Routes = useRoutes(appRoutes);
  return Routes;
};

export default Layout;
