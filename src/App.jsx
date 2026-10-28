import { useEffect, useState } from 'react';
import { ROOMS, FINAL_CODE } from './data/rooms.js';
import { loadProgress, saveProgress, clearProgress } from './lib/storage.js';
import Intro from './components/Intro.jsx';
import Room from './components/Room.jsx';
import ClueTrail from './components/ClueTrail.jsx';
import Vault from './components/Vault.jsx';
import Ticket from './components/Ticket.jsx';

export default function App() {
  const [solved, setSolved] = useState(() => loadProgress());
  const [view, setView] = useState(() => (loadProgress().length === ROOMS.length ? 'vault' : 'intro'));
  const [activeId, setActiveId] = useState(() => ROOMS.find((room) => !loadProgress().includes(room.id))?.id ?? ROOMS[0].id);

  useEffect(() => {
    saveProgress(solved);
  }, [solved]);

  const activeRoom = ROOMS.find((room) => room.id === activeId) ?? ROOMS[0];
  const activeIndex = ROOMS.indexOf(activeRoom);
  const letters = ROOMS.filter((room) => solved.includes(room.id)).map((room) => room.letter);

  function start() {
    if (solved.length === ROOMS.length) {
      setView('vault');
      return;
    }
    const next = ROOMS.find((room) => !solved.includes(room.id));
    setActiveId(next.id);
    setView('room');
  }

  function handleSolve(id) {
    setSolved((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  function handleContinue() {
    const remaining = ROOMS.filter((room) => !solved.includes(room.id));
    if (remaining.length === 0) {
      setView('vault');
      return;
    }
    setActiveId(remaining[0].id);
    setView('room');
  }

  function handleRestart() {
    clearProgress();
    setSolved([]);
    setActiveId(ROOMS[0].id);
    setView('intro');
  }

  return (
    <div className="app">
      <div className="shell">
        <header className="brand">
          <span className="brand-mark" aria-hidden="true">
            ◈
          </span>
          <span>Bucket&rsquo;s Chocolate Works · est. 1897</span>
        </header>

        <ClueTrail solved={solved} activeId={activeId} />

        {view === 'intro' && (
          <Intro solvedCount={solved.length} total={ROOMS.length} onStart={start} />
        )}

        {view === 'room' && (
          <Room
            room={activeRoom}
            index={activeIndex}
            total={ROOMS.length}
            solved={solved.includes(activeRoom.id)}
            onSolve={handleSolve}
            onContinue={handleContinue}
          />
        )}

        {view === 'vault' && (
          <Vault letters={letters} onUnlock={() => setView('ticket')} />
        )}

        {view === 'ticket' && <Ticket code={FINAL_CODE.toUpperCase()} onRestart={handleRestart} />}
      </div>

      <footer className="footer">
        A five-room riddle challenge · {solved.length} of {ROOMS.length} rooms opened
      </footer>
    </div>
  );
}
