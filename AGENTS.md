# Charlie's Chocolate Factory — Base44 sandbox notes

Single-page Vite + React storefront. No backend, database or external credentials: the
cart, checkout and golden-ticket reveal are all client-side demonstration state.

## Running here

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

The `web` service runs `node:22-slim`, bind-mounts the repo at `/app`, installs from
`package-lock.json`-compatible `npm install` on startup and runs `vite` on port 3000.
`node_modules` lives in a named volume so installs never touch the host or git.

## Sandbox-only configuration

`vite.config.js` only appends the sandbox host wildcard (`.<BASE44_SANDBOX_HOST_DOMAIN>`)
to `server.allowedHosts` when `BASE44_PREVIEW_MODE === "1"`. With the flag unset, Vite keeps
its default host checking. Nothing else in the app reads the flag.

## Verifying

```bash
curl -sS http://localhost:3000/ | head          # Vite serves the module entry
docker compose -f docker-compose.base44.yml ps  # web should report healthy
```

Vite hot-reloads source edits through the bind mount; a change to `docker-compose.base44.yml`,
`package.json` or a dependency needs `docker compose -f docker-compose.base44.yml up -d web`.

## Layout

- `src/App.jsx` — page composition (`Hero`, `Conveyor`, `TastingLab`, `GoldenTicket`,
  `Marquee`, `FactoryMap`, `CartDrawer`).
- `src/CartContext.jsx` — cart state shared by the conveyor quick-add, tasting lab and drawer.
- `src/components/Confection.jsx` / `WonkaBar.jsx` — the imagery is CSS art on purpose:
  no photography is bundled, so the whole page has no external image requests.
- `src/data/products.js` — catalogue, flavour notes and radar values.
- `src/components/CursorSeal.jsx` — the rotating "W" cursor seal. It is enabled for a fine
  hover pointer or a device with no touch input, and disabled on touch-only devices where
  `cursor: none` would leave nothing on screen.

## Notes

- Vite HMR fires through the bind mount without polling; do not add `watch.usePolling`
  unless edits stop being picked up.
- The conveyor is a tall sticky section on desktop (vertical scroll drives horizontal belt
  movement via a direct transform on the track ref) and a native swipe row below 768px.
