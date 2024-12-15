/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig((env) => {
  const isDev = env.mode === "development";

  return {
    plugins: [react()],
    build: {
      outDir: "build",
    },
    define: {
      __IS_DEV__: isDev,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    test: {
      reporters: ["default"],
      coverage: {
        reportsDirectory: "coverage",
        provider: "v8",
        include: ["src/**/*"],
        exclude: ["**/index.{ts,tsx}", "**/const/**", "**/types/**"],
      },
      globals: true,
      setupFiles: "./setup.tests.ts",
      environment: "jsdom",
      include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
  };
});
