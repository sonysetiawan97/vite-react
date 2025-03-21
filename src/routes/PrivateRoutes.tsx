import { type FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MasterLayout } from "../layout/MasterLayout";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { LoadingAuthPage } from "@/components/loadings/LoadingAuthPage";

const ErrorRoutes = lazy(() => import("@modules/errors/PrivateRoutes"));
const Dashboard = lazy(() => import("@modules/dashboard/dashboard"));
const UserRoutes = lazy(() => import("@modules/users/PrivateRoutes"));
const ProductRoutes = lazy(() => import("@modules/products/PrivateRoutes"));
const ExampleRoutes = lazy(() => import("@modules/examples/PrivateRoutes"));

const PrivateRoutes: FC = () => {
  return (
    <Suspense fallback={<LoadingAuthPage />}>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route element={<MasterLayout />}>
            <Route path="/user/*" element={<UserRoutes />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products/*" element={<ProductRoutes />} />
            <Route path="/examples/*" element={<ExampleRoutes />} />
          </Route>
          <Route path="*" element={<ErrorRoutes />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default PrivateRoutes;
