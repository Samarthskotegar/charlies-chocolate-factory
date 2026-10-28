import { useState } from 'react';
import { FINAL_CODE, ROOMS } from '../data/rooms.js';
import { matchesCode } from '../lib/answer.js';

export default function Vault({ letters, onUnlock }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (matchesCode(code, FINAL_CODE)) {
      setError('');
      onUnlock();
      return;
    }
    setError('The lock does not move. Read the five letters in the order you found them.');
  }

  return (
    <section className="panel vault">
      <p className="eyebrow">All five rooms are open</p>
      <h2 className="display room-title">The Vault</h2>
      <p className="place">A sugar-glass door, and five letters to speak.</p>

      <ol className="slots" aria-label="Recovered letters">
        {(letters.length ? letters : ROOMS.map((room) => room.letter)).map((letter, index) => (
          <li key={`${letter}-${index}`} className="slot">
            {letter}
          </li>
        ))}
      </ol>

      <form className="answer" onSubmit={handleSubmit}>
        <label htmlFor="vault-code">Speak the word</label>
        <div className="answer-row">
          <input
            id="vault-code"
            type="text"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              setError('');
            }}
            placeholder="The five letters, in order"
            autoComplete="off"
            spellCheck="false"
          />
          <button type="submit" className="btn primary">
            Open the vault
          </button>
        </div>
        {error && (
          <p className="hint" role="status">
            {error}
          </p>
        )}
      </form>
    </section>
  );
}
