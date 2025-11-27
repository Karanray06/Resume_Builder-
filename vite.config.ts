import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Resume_Builder-/",
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    strictPort: false,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
