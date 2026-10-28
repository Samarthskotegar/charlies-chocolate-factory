import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The sandbox preview reaches the dev server through a rotating proxy host, so
// the host allowlist is extended for that domain only when running inside the
// Base44 sandbox (BASE44_PREVIEW_MODE=1). Any other environment keeps Vite's
// default allowlist.
const allowedHosts = [];
if (process.env.BASE44_PREVIEW_MODE === '1' && process.env.BASE44_SANDBOX_HOST_DOMAIN) {
  allowedHosts.push(`.${process.env.BASE44_SANDBOX_HOST_DOMAIN}`);
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts,
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
});
