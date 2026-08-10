import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served at the custom domain www.adamgf.com, so base is the domain root.
// public/CNAME (contents "www.adamgf.com") tells GitHub Pages the custom
// domain on each deploy. If you ever revert to the github.io/adamgf-site/
// project URL, set base back to "/adamgf-site/" and disable public/CNAME.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
});
