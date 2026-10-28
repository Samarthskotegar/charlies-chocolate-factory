import { useState } from 'react';
import { CARDS } from '../data/activity.js';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function QuizClue({ clue, index, total, onPass }) {
  const [wrong, setWrong] = useState([]);
  const [correctIndex, setCorrectIndex] = useState(null);
  const discovery = CARDS.find((card) => card.id === clue.discovery);
  const isLast = index === total - 1;

  function choose(optionIndex) {
    if (correctIndex !== null) return;

    if (clue.options[optionIndex].correct) {
      setCorrectIndex(optionIndex);
      return;
    }

    setWrong((prev) => (prev.includes(optionIndex) ? prev : [...prev, optionIndex]));
  }

  return (
    <section className="panel">
      <div className="step-meta">
        <span>Quiz clue {index + 1}</span>
        <span>
          {index + 1} of {total}
        </span>
      </div>

      <h2 className="display section-title">{clue.question}</h2>

      <div className="options">
        {clue.options.map((option, optionIndex) => {
          const isCorrect = correctIndex === optionIndex;
          const isWrong = wrong.includes(optionIndex);

          return (
            <button
              key={option.label}
              type="button"
              className={`option${isCorrect ? ' is-correct' : ''}${isWrong ? ' is-wrong' : ''}`}
              onClick={() => choose(optionIndex)}
              disabled={correctIndex !== null}
            >
              <span className="option-letter" aria-hidden="true">
                {LETTERS[optionIndex]}
              </span>
              <span>{option.label}</span>
              {isCorrect && (
                <span className="option-mark" aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {correctIndex === null && wrong.length > 0 && (
        <p className="hint notice" role="status">
          Not quite — think about what the factory truly needs to run.
        </p>
      )}

      {correctIndex !== null && (
        <div className="discovery">
          <p className="eyebrow">Discovery</p>
          <div className="discovery-body">
            <span className="discovery-emoji" aria-hidden="true">
              {discovery.emoji}
            </span>
            <div>
              <p className="discovery-name">{discovery.label}</p>
              <p className="discovery-note">{clue.note}</p>
            </div>
          </div>
          <button type="button" className="btn primary" onClick={onPass}>
            {isLast ? 'See the answer ▸' : 'Next clue ▸'}
          </button>
        </div>
      )}
    </section>
  );
}
