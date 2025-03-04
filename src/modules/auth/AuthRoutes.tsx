import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../../layout/AuthLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

import { ErrorRoutes } from "../error/ErrorRoutes";

const AuthRoutes: FC = () => {
  return (
    <Routes>
      {/* TODO: Create Auth Layout */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route index element={<Login />} />
      </Route>
      <Route path="*" element={<ErrorRoutes />} />
    </Routes>
  );
};

export { AuthRoutes };
