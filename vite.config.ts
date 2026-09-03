import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInlineLimit: 0, // No inline-ar assets como base64
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]", // conservar nombres originales
      },
    },
  },
});
