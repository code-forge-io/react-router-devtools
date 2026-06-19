import { reactRouter } from "@react-router/dev/vite"
import { defineRdtConfig, reactRouterDevTools } from "react-router-devtools"
import { defineConfig } from "vite"

// Import the devtools plugin by its published package name (not a relative dist path)
// so this example exercises the real consumer resolution path — including the
// `vite-node` dependency that issue #261 was about.
const config = defineRdtConfig({
  includeInProd: {
    client: true,
    server: true,
  },
  server: {
    serverTimingThreshold: 250,
  },
})

export default defineConfig({
  plugins: [reactRouterDevTools(config), reactRouter()],
  server: {
    open: true,
    port: 3001,
  },
})
