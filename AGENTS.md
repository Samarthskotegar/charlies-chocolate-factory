# Agent notes — Charlie's Chocolate Factory

## What this project is

A client-only interactive classroom challenge built from the "Build Charlie's
Chocolate Factory" program: hook → pick 3 of 10 cards → three quiz clues (each
reveals a discovery) → puzzle solved (answer plus the team's picks compared) →
think-pair-share → lesson transition. Vite + React SPA, no backend, no database,
no external services and no secrets.

All activity content (cards, quiz clues and their correct answers, next-step
ideas, mission areas) lives in `src/data/activity.js`. Screens are one component
each under `src/components/`, with the step machine in `src/App.jsx`. There is no
persistence: a reload restarts the challenge, and the footer's "Start over"
resets it.

## Running it in the sandbox

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

- The `web` service runs `node:22-alpine` with the repo bind-mounted at `/app`
  and Vite in dev mode on host port 3000, so edits hot-reload — never bake the
  source into an image.
- Dependencies are installed on container start (`npm ci` when
  `package-lock.json` exists, otherwise `npm install`) into the `node_modules`
  named volume, *not* the host checkout. That volume is created on first boot
  and survives restarts; if `package.json` changes, `docker compose -f
  docker-compose.base44.yml up -d` reinstalls on the next start, and a stale
  volume can be cleared with `docker compose -f docker-compose.base44.yml down
  -v` (there is no data to lose).
- `npm install` inside the container writes `package-lock.json` back to the repo
  through the bind mount — keep it committed so restarts use `npm ci`.

## Preview host / origin quirks

The preview proxy rewrites `Host` to `<port>-<sandbox id>.$BASE44_SANDBOX_HOST_DOMAIN`.
Vite rejects unknown hosts, so `vite.config.js` appends
`.${BASE44_SANDBOX_HOST_DOMAIN}` to `server.allowedHosts`, and the compose file
passes `BASE44_SANDBOX_HOST_DOMAIN` plus `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS`
into the container. This extension is gated on `BASE44_PREVIEW_MODE === "1"`:
with the flag unset, Vite keeps its default allowlist and normal local use is
unchanged. `server.host` is `0.0.0.0` so the proxy can reach the dev server.

## Verifying it works

- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` → `200`
- `curl -s http://localhost:3000/src/main.jsx` must return **unhashed** module
  source (proves the dev server is serving the checkout, not a prebuilt bundle).
- Healthcheck: `docker compose -f docker-compose.base44.yml ps` shows `healthy`.
- In the browser: start the mission, pick exactly 3 cards (a 4th tap shows the
  "only three fit the budget" nudge), lock in, answer the three clues (a wrong
  option is struck through and can be retried), check the solved screen lists
  Factory Building / Factory Workers / Raw Materials and compares the team's
  picks, tap some think-pair-share chips, then reach the lesson screen.

There is no test suite or linter configured; the build check is
`docker compose -f docker-compose.base44.yml exec -T web npm run build`.
