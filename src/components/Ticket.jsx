export default function Ticket({ code, onRestart }) {
  return (
    <section className="panel ticket-scene">
      <p className="eyebrow gold">The vault is open</p>
      <h2 className="display room-title">One Golden Ticket</h2>

      <div className="ticket" role="img" aria-label={`Golden Ticket, code ${code}`}>
        <div className="ticket-main">
          <p className="ticket-kicker">Bucket&rsquo;s Chocolate Works</p>
          <p className="ticket-title">Golden Ticket</p>
          <p className="ticket-sub">Admit one · the last of its kind</p>
          <dl className="ticket-meta">
            <div>
              <dt>Room code</dt>
              <dd>{code}</dd>
            </div>
            <div>
              <dt>Bearer</dt>
              <dd>You</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd>{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</dd>
            </div>
          </dl>
        </div>
        <div className="ticket-stub">
          <span>No. 0001</span>
          <span>Keep this half</span>
        </div>
      </div>

      <p className="clue-text center">
        Five riddles, five letters, one word — and the gates of the factory are yours.
      </p>

      <button type="button" className="btn ghost" onClick={onRestart}>
        Start the tour again
      </button>
    </section>
  );
}
