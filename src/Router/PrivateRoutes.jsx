import { Navigate, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "../constants/routes";

const PrivateRoutes = ({ children, allowedRoles = [] }) => {
  const { user, token } = useSelector(state => state.auth);
  const location = useLocation();

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }
  if (allowedRoles.length && !allowedRoles.includes(user?.role)) {
    return (
      <Navigate to={ROUTES.UNAUTHORIZED} state={{ from: location }} replace />
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default PrivateRoutes;
