import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteStaticCopy({
    targets: [
      {
        // need the service worker for mocking API calls. typically we wouldn't serve this to prod in our build
        src: 'src/mockServiceWorker.js',
        dest: '' 
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
