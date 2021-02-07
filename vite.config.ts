import reactRefresh from "@vitejs/plugin-react-refresh";
import tsConfigPath from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [reactRefresh(), tsConfigPath()],
    base: "./",
    optimizeDeps: {
        include: [],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "src/styles/ress.scss";',
            },
        },
    },
});
