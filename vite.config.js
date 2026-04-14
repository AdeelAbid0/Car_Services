import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@routes": path.resolve(__dirname, "./src/router/routes"),
      "@components": path.resolve(__dirname, "./src/components-alpha"),
      "@assets": path.resolve(__dirname, "./src/assets-alpha"),
      "@utilities": path.resolve(__dirname, "./src/utilities-alpha")
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Large vendor chunks ko alag karein
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "antd-vendor": ["antd"],
          "quill-vendor": ["react-quill-new"],
          "redux-vendor": ["react-redux", "@reduxjs/toolkit"]
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Warning limit increase
  }
});
