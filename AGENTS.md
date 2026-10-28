# Agent notes — Charlie's Chocolate Factory

## What this project is

A client-only interactive riddle challenge (five rooms → one code word → a Golden
Ticket). Vite + React SPA, no backend, no database, no external services and no
secrets. All puzzle content lives in `src/data/rooms.js`; progress is kept in
`localStorage`.

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
- In the browser: enter the factory, answer a room (e.g. `walnut` in room II —
  a wrong answer twice reveals the hint), collect the five letters `C A C A O`,
  then type `cacao` in the vault to reach the ticket.

There is no test suite or linter configured; the build check is
`docker compose -f docker-compose.base44.yml exec -T web npm run build`.
