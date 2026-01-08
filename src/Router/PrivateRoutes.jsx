import { Navigate, useLocation } from "react-router-dom";
import { Suspense } from "react";

const PrivateRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
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
