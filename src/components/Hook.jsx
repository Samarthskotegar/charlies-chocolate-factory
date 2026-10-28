import { CARDS } from '../data/activity.js';

export default function Hook({ onStart }) {
  return (
    <section className="panel">
      <p className="eyebrow">Hands-on mystery challenge</p>
      <h1 className="display hook-title">
        Build Charlie&rsquo;s <span className="gold">Chocolate Factory</span>
      </h1>

      <p className="lede">
        Congratulations! Charlie and his family have received permission to open their very own
        Chocolate Factory! 🍫🎉
      </p>

      <div className="story">
        <p>
          <strong>But there is a problem…</strong>
        </p>
        <p>
          They only have enough money to start with <strong>three important things</strong>. Without
          these three things, the factory cannot open!
        </p>
        <p>
          Your mission is to become a <strong>Factory Expert Team</strong> and solve the puzzle before
          the grand opening day.
        </p>
      </div>

      <ul className="meta-chips">
        <li>{CARDS.length} cards</li>
        <li>3 quiz clues</li>
        <li>1 team answer</li>
      </ul>

      <button type="button" className="btn primary wide" onClick={onStart}>
        Start the mission ▸
      </button>
    </section>
  );
}
