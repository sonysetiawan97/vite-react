import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/style/style.css"
import "./assets/style/custom.css"

import axios from "axios";
import { axiosSetup } from "./utils/axiosSetup.ts";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./utils/i18n.ts";
import { registerSW } from "virtual:pwa-register";

import { AppRoutes } from "./routes/AppRoutes.tsx";

const { VITE_APP_ENV, VITE_APP_MODE_MOCK } = import.meta.env;

axiosSetup(axios);

registerSW({
  onNeedRefresh() {
    console.log("New content available! please refresh");
  },
  onOfflineReady() {
    console.log("App is ready to work offline.");
  },
  onRegisterError(error) {
    console.error("Service Worker registration failed:", error);
  },
});

async function initMSW() {
  if (VITE_APP_ENV === "development" && VITE_APP_MODE_MOCK === "true") {
    const { server } = await import("./mocks/browser.ts");
    await server.start({
      onUnhandledRequest: "warn",
      serviceWorker: { url: "/mockServiceWorker.js", options: { scope: "/" } },
    });
  }
}

initMSW().then(() => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <AppRoutes />
      </I18nextProvider>
    </StrictMode>
  );
});

import "./assets/js/custom.js"
