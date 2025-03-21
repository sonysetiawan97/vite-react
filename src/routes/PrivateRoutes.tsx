import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { MasterLayout } from "../layout/MasterLayout";

import { UserRoutes } from "../modules/user/UserRoutes";
import { ErrorRoutes } from "../modules/error/ErrorRoutes";
import { Dashboard } from "../components/Dashboard";

import { PrivateRoutes as ProductRoutes } from "../modules/products/PrivateRoutes";
import { PrivateRoutes as ExampleRoutes  } from "../modules/examples/PrivateRoutes";

const PrivateRoutes: FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Routes>
      {/* TODO: create master layout */}
      <Route element={<MasterLayout />}>
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products/*" element={<ProductRoutes />} />
        <Route path="/examples/*" element={<ExampleRoutes />} />
      </Route>
      <Route path="*" element={<ErrorRoutes />} />
    </Routes>
  );
};

export { PrivateRoutes };
