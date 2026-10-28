import { useEffect, useRef, useState } from 'react';
import { matchesAnswer } from '../lib/answer.js';

export default function Room({ room, index, total, solved, onSolve, onContinue }) {
  const [guess, setGuess] = useState('');
  const [wrong, setWrong] = useState(0);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setGuess('');
    setWrong(0);
    setShake(false);
  }, [room.id]);

  useEffect(() => {
    if (!solved) inputRef.current?.focus();
  }, [room.id, solved]);

  function handleSubmit(event) {
    event.preventDefault();
    if (solved) return;

    if (matchesAnswer(guess, room)) {
      onSolve(room.id);
      return;
    }

    setWrong((count) => count + 1);
    setShake(true);
    window.setTimeout(() => setShake(false), 450);
  }

  return (
    <section className="panel room" key={room.id}>
      <div className="room-meta">
        <span>Room {room.numeral}</span>
        <span>
          {index + 1} of {total}
        </span>
      </div>

      <h2 className="display room-title">{room.name}</h2>
      <p className="place">{room.place}</p>

      <blockquote className="riddle">{room.riddle}</blockquote>

      {solved ? (
        <div className="clue-card">
          <p className="eyebrow">Clue recovered</p>
          <div className="clue-letter" aria-hidden="true">
            {room.letter}
          </div>
          <p className="clue-text">{room.clue}</p>
          <button type="button" className="btn primary" onClick={onContinue}>
            Continue ▸
          </button>
        </div>
      ) : (
        <form className={`answer ${shake ? 'shake' : ''}`} onSubmit={handleSubmit}>
          <label htmlFor={`answer-${room.id}`}>Your answer</label>
          <div className="answer-row">
            <input
              id={`answer-${room.id}`}
              ref={inputRef}
              type="text"
              value={guess}
              onChange={(event) => setGuess(event.target.value)}
              placeholder="Type what the riddle describes"
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="btn primary">
              Break the seal
            </button>
          </div>

          {wrong > 0 && (
            <p className="hint" role="status">
              {wrong >= 2
                ? `Hint: ${room.hint}`
                : 'Not quite. Read it once more — the answer is simpler than you think.'}
            </p>
          )}
        </form>
      )}
    </section>
  );
}
