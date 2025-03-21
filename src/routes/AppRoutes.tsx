import { type FC, lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { App } from "../App";

import { Home } from "../components/Home";
import { LoadingPage } from "@components/loadings/LoadingPage";

const { VITE_APP_BASE_URL } = import.meta.env;

const AuthRoutes = lazy(() => import("@modules/auth/PrivateRoutes"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));
const ErrorRoutes = lazy(() => import("@modules/errors/ErrorRoutes"));

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter basename={VITE_APP_BASE_URL}>
        <Routes>
          <Route element={<App />}>
            {/* Home page */}
            <Route path="/" element={<Home />} />

            {/* Auth routes */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* Private routes (if authenticated) */}
            <Route path="/*" element={<PrivateRoutes />} />
            <Route path="*" element={<ErrorRoutes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export { AppRoutes };
