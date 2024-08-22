/// <reference types='vitest'/>
/// <reference types='vite/client'/>
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Dummy-Swiggy/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./commponents/tests/setup.js",
    coverage: { 
      reporter: ["text", "json", "html"] 
    },
  },
});
