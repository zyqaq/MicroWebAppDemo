import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/", // 和基座中配置的activeRule一致
  server: {
    port: 3002,
    cors: true,
    origin: "http://localhost:3002",
  },
  plugins: [vue()],
});
