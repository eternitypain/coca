import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  server: {
    port: 5252,
  },
  build: {
    outDir: "../dist",
  },
});
