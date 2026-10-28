export default function PuzzleSolved({ solvedCards, pickedCards, onNext }) {
  const solvedIds = solvedCards.map((card) => card.id);
  const matched = pickedCards.filter((card) => solvedIds.includes(card.id)).length;
  const perfect = matched === solvedIds.length && pickedCards.length === solvedIds.length;

  return (
    <section className="panel">
      <p className="eyebrow gold">Puzzle solved</p>
      <h2 className="display section-title">Charlie&rsquo;s three essentials</h2>
      <p className="place">The first three important things Charlie needs are:</p>

      <ul className="reveal-grid">
        {solvedCards.map((card) => (
          <li key={card.id} className="reveal-item">
            <span className="reveal-tick" aria-hidden="true">
              ✅
            </span>
            <span className="reveal-emoji" aria-hidden="true">
              {card.emoji}
            </span>
            <span className="reveal-label">{card.label}</span>
          </li>
        ))}
      </ul>

      {pickedCards.length > 0 && (
        <div className="compare">
          <p className="eyebrow">Your team answer</p>
          <p className="compare-line">
            {perfect
              ? 'Spot on — your three cards match exactly.'
              : `You found ${matched} of the 3. Here is how your cards line up:`}
          </p>
          <ul className="compare-list">
            {pickedCards.map((card) => {
              const isRight = solvedIds.includes(card.id);
              return (
                <li key={card.id} className={isRight ? 'is-right' : 'is-off'}>
                  <span aria-hidden="true">{isRight ? '✓' : '✗'}</span> {card.emoji} {card.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <button type="button" className="btn primary wide" onClick={onNext}>
        Think · Pair · Share ▸
      </button>
    </section>
  );
}
