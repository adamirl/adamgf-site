import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served as a GitHub Pages project site at /adamgf-site/ for now.
// When www.adamgf.com is pointed at Pages, switch base back to "/" and restore public/CNAME.
export default defineConfig({
  plugins: [react()],
  base: "/adamgf-site/",
  build: {
    outDir: "dist",
  },
});
