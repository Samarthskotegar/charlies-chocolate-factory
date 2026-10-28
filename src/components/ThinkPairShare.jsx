import { useState } from 'react';
import { NEXT_IDEAS } from '../data/activity.js';

export default function ThinkPairShare({ onNext }) {
  const [ideas, setIdeas] = useState([]);

  function toggle(id) {
    setIdeas((prev) => (prev.includes(id) ? prev.filter((idea) => idea !== id) : [...prev, id]));
  }

  return (
    <section className="panel">
      <p className="eyebrow">Think · Pair · Share</p>
      <h2 className="display section-title">What comes next?</h2>

      <p className="tps-question">
        What do you think Charlie will need next after getting these three things?
      </p>
      <p className="place">Talk it through with your partner, then tap every idea your team agrees on.</p>

      <ul className="chips">
        {NEXT_IDEAS.map((idea) => {
          const isOn = ideas.includes(idea.id);
          return (
            <li key={idea.id}>
              <button
                type="button"
                className={`chip${isOn ? ' is-on' : ''}`}
                onClick={() => toggle(idea.id)}
                aria-pressed={isOn}
              >
                <span aria-hidden="true">{idea.emoji}</span> {idea.label}
              </button>
            </li>
          );
        })}
      </ul>

      <button type="button" className="btn primary wide" onClick={onNext}>
        Continue to the lesson ▸
      </button>
    </section>
  );
}
