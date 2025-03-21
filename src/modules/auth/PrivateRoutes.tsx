import { type FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../../layout/AuthLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { LoadingPage } from "@components/loadings/LoadingPage";

const ErrorRoutes = lazy(() => import("@modules/errors/PrivateRoutes"));

const PrivateRoutes: FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        {/* TODO: Create Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route index element={<Login />} />
        </Route>
        <Route path="*" element={<ErrorRoutes />} />
      </Routes>
    </Suspense>
  );
};

export default PrivateRoutes;
