import { type FC, lazy, Suspense, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { ListWrapper } from "./pages/list/ListWrapper";
import { AddPage } from "./pages/add/AddPage";
import { LoadingPage } from "@components/loadings/LoadingPage";
import { setPageTitle } from "@stores/PageHeaderStore";
import { moduleName } from "./types/Model";

const ErrorRoutes = lazy(() => import("@modules/errors/ErrorRoutes"));

const PrivateRoutes: FC = () => {
  useEffect(() => {
    setPageTitle(moduleName);
  }, []);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route element={<Outlet />}>
          <Route index element={<ListWrapper />} />
          <Route path="/add" element={<AddPage />} />
        </Route>
        <Route path="*" element={<ErrorRoutes />} />
      </Routes>
    </Suspense>
  );
};

export default PrivateRoutes;
