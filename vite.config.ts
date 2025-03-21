import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";
import fs from "node:fs";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const port: number = Number.parseInt(env.VITE_APP_PORT) || 5173;
  const isDev = mode === "development";

  return {
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION),
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
    },

    base: env.VITE_APP_BASE_URL || "/",
    plugins: [
      react(),
      mkcert({ savePath: "./certs", force: true }),
      VitePWA({
        registerType: "prompt",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}", "locales/**/*.json"],
          clientsClaim: true,
          skipWaiting: true,
        },
        manifest: {
          name: "PWA Vite React App",
          short_name: "Vite React",
          description: "PWA Vite React App",
          theme_color: "#ffffff",
          icons: [
            {
              src: "/vite.svg",
              sizes: "192x192",
              type: "image/svg+xml",
            },
            {
              src: "/vite.svg",
              sizes: "512x512",
              type: "image/svg+xml",
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@stores": path.resolve(__dirname, "./src/stores"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@modules": path.resolve(__dirname, "./src/modules"),
        "@context": path.resolve(__dirname, "./src/contexts"),
        "@types": path.resolve(__dirname, "./src/types"),
      },
    },

    server: isDev
      ? {
          port,
          open: true,
          https: {
            cert: path.resolve(__dirname, "certs/cert.pem"),
            key: path.resolve(__dirname, "certs/dev.pem"),
          },
        }
      : undefined,

    build: {
      outDir: "dist",
      sourcemap: isDev,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
          },
        },
        external:
          fs.existsSync("node_modules/msw") && env.VITE_APP_ENV === "production"
            ? ["msw"]
            : [],
      },
    },
  };
});
