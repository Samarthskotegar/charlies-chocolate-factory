import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const previewMode = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxHostDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    // The sandbox proxy forwards Host: <port>-<sandbox id>.<domain>, and the id
    // rotates, so allow the whole sandbox domain instead of a fixed host.
    allowedHosts:
      previewMode && sandboxHostDomain ? [`.${sandboxHostDomain}`, 'localhost'] : undefined,
  },
})
