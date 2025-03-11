import type { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { App } from "../App";

import { AuthRoutes } from "../modules/auth/AuthRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorRoutes } from "../modules/error/ErrorRoutes";

import { Home } from "../components/Home";

const { VITE_APP_BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  return (
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
  );
};

export { AppRoutes };
