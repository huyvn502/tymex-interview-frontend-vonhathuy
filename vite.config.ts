import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteMockServe({ mockPath: "mock" })],
  resolve: { alias: { '@': resolve(projectRootDir, 'src') } },
});
