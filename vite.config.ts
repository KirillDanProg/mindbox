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
  };
});
