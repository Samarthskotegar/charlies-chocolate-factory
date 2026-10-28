# charlies-chocolate-factory

Interactive Charlie's Chocolate Factory mystery challenge website.

Five sealed rooms, five riddles, five letters, one code word — solve them all to
open the vault and claim the last Golden Ticket. Built with Vite + React; no
backend, no database, no accounts. Progress is saved in `localStorage`.

## Run it

```bash
docker compose -f docker-compose.base44.yml up -d --build
```

Then open <http://localhost:3000>.

The container runs Vite in dev mode with the repo bind-mounted, so edits
hot-reload. See `AGENTS.md` for sandbox/preview specifics.

## Project layout

```
src/
  App.jsx            stage machine: intro → rooms → vault → ticket
  components/        Intro, Room, ClueTrail, Vault, Ticket
  data/rooms.js      riddles, accepted answers, clues (the whole challenge)
  lib/answer.js      answer + code matching
  lib/storage.js     localStorage progress
  styles.css         chocolate-and-gold theme
```
