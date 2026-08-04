import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Custom domain (see public/CNAME) serves from the repo root, so base stays "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
});
