import { STORY } from '../data/rooms.js';

export default function Intro({ solvedCount, total, onStart }) {
  const started = solvedCount > 0;

  return (
    <section className="panel intro">
      <p className="eyebrow">A mystery challenge</p>
      <h1 className="display">
        The Chocolate <span className="gold">Factory</span>
      </h1>
      <p className="lede">
        Five rooms are sealed. Five riddles stand between you and the last Golden Ticket ever printed.
      </p>

      <div className="story">
        {STORY.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <button type="button" className="btn primary wide" onClick={onStart}>
        {started ? `Continue — ${solvedCount} of ${total} rooms open` : 'Enter the factory'}
      </button>

      <p className="footnote">No download. No account. Only riddles.</p>
    </section>
  );
}
