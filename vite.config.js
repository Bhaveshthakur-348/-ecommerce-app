// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Set the test environment to JSDOM
    globals: true, // Makes Vitest imports globally available
    setupFiles: ["./testSetup.js"], // Include the test setup file
  },
});
