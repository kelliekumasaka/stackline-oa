import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteStaticCopy({
    targets: [
      {
        src: 'src/mockServiceWorker.js', // Adjust this path to your actual file location
        dest: '' // Copy to the root of the dist directory
      }
    ]
  })],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  base: '/stackline-oa/'
})
