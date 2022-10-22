import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "QUAGRI_",
  plugins: [react()],
  assetsInclude: [
    "**/*.PNG",
    "**/*.JPG",
    "**/*.SVG",
    "**/*.CSS",
    "**/*.JS",
    "**/*.HTML",
  ],
});
