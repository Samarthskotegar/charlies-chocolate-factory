import { useState } from 'react';
import { CARDS } from '../data/activity.js';
import ThingCard from './ThingCard.jsx';

export default function CardChallenge({ picked, onToggle, onLock }) {
  const [nudge, setNudge] = useState(false);
  const remaining = 3 - picked.length;

  function handleSelect(id) {
    if (!picked.includes(id) && picked.length === 3) {
      setNudge(true);
      return;
    }
    setNudge(false);
    onToggle(id);
  }

  return (
    <section className="panel">
      <div className="step-meta">
        <span>Puzzle challenge</span>
        <span>
          Pick 3 of {CARDS.length}
        </span>
      </div>

      <h2 className="display section-title">Which three things does Charlie need?</h2>
      <p className="place">Select the cards that Charlie needs.</p>

      <div className="cards-grid">
        {CARDS.map((card) => (
          <ThingCard
            key={card.id}
            item={card}
            selected={picked.includes(card.id)}
            onClick={() => handleSelect(card.id)}
          />
        ))}
      </div>

      <div className="pick-bar">
        <p className="pick-count">
          {picked.length} of 3 selected{remaining > 0 ? ` · ${remaining} to go` : ' · ready'}
        </p>
        <button type="button" className="btn primary" onClick={onLock} disabled={picked.length !== 3}>
          Lock in team answer
        </button>
      </div>

      {nudge && (
        <p className="hint notice" role="status">
          Only three things fit the budget — deselect one first.
        </p>
      )}

      <p className="footnote">Hold that thought: three quiz clues come next.</p>
    </section>
  );
}
