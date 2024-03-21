import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.notion.com/v1/databases",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});
