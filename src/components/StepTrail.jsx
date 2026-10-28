const STAGES = ['Puzzle', 'Clues', 'Solved', 'Share', 'Lesson'];

export default function StepTrail({ stage }) {
  return (
    <ol className="trail" aria-label="Challenge steps">
      {STAGES.map((label, index) => {
        const className = [
          'trail-item',
          index === stage && 'is-active',
          index < stage && 'is-done',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <li key={label} className={className}>
            <span className="dot" aria-hidden="true">
              {index < stage ? '✓' : index + 1}
            </span>
            <span className="sr-only">
              {label}
              {index === stage ? ' (current step)' : ''}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
