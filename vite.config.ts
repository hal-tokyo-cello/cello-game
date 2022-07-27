import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import env from "vite-plugin-env-compatible";

export default defineConfig({
  plugins: [
    env({
      prefix: "CELLO",
      mountedPath: "process.env",
    }),
    vue(),
  ],
});
