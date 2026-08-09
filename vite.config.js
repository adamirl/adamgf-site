import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Currently deployed at github.io/adamgf-site/ (a GitHub Pages *project* page,
// not a custom domain yet), so base must match the repo name.
//
// When cutting over to the custom domain (www.adamgf.com):
//   1. Point DNS: CNAME record "www" -> "<user>.github.io"
//   2. Set base back to "/"
//   3. Restore public/CNAME with "www.adamgf.com" (see public/CNAME.disabled)
//   4. Push — the existing GitHub Actions workflow redeploys automatically
export default defineConfig({
  plugins: [react()],
  base: "/adamgf-site/",
  build: {
    outDir: "dist",
  },
});
