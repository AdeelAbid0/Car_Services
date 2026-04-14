import { Suspense } from "react";

const PublicRoutes = ({ children }) => {
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

export default PublicRoutes;
