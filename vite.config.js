import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://suruchi-portfolio-brown.vercel.app/", // Critical for asset paths
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  // Add these for Vercel compatibility:
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

});