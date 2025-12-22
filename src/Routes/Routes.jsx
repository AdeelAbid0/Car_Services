import { Route, Routes as AppRoutes } from "react-router-dom";
import { PublicRoutes } from "./routing";

const Routes = () => {
  return (
    <AppRoutes>
      {/* For PublicRoutes */}
      {Object.values(PublicRoutes).map((route) => {
        const Component = route.component;
        return (
          <Route key={route.id} path={route.path} element={<Component />} />
        );
      })}
    </AppRoutes>
  );
};

export default Routes;
