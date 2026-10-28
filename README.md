# charlies-chocolate-factory

Interactive Charlie's Chocolate Factory mystery challenge website — a classroom
activity where teams decide which three things Charlie needs to open his factory,
then confirm each answer with three quiz clues.

Flow: hook → pick 3 of 10 cards → quiz clue 1–3 (each reveals a discovery) →
puzzle solved (answer + the team's picks compared) → think-pair-share →
transition to the lesson.

Built with Vite + React. No backend, no database, no accounts.

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
  App.jsx            step machine: hook → cards → clues → solved → share → lesson
  components/        Hook, CardChallenge, QuizClue, PuzzleSolved,
                     ThinkPairShare, LessonTransition, StepTrail, ThingCard
  data/activity.js   cards, quiz clues, next-step ideas, mission areas
  styles.css         chocolate-and-gold theme
```
