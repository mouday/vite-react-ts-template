import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { createStyleImportPlugin, AntdResolve } from "vite-plugin-style-import";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // Antd按需引入
    // createStyleImportPlugin({
    //   resolves: [AntdResolve()],
    // }),
  ],

  resolve: {
    // 路径别名配置
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
