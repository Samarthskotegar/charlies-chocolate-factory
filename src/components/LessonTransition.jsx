import { MISSIONS } from '../data/activity.js';

export default function LessonTransition({ onRestart }) {
  return (
    <section className="panel">
      <p className="eyebrow gold">Excellent work, Factory Experts</p>
      <h2 className="display section-title">Charlie&rsquo;s factory has started</h2>
      <p className="lede">Now he needs your help to make it successful.</p>
      <p className="story-line">
        Each team will complete a special mission to improve Charlie&rsquo;s factory through:
      </p>

      <ul className="missions">
        {MISSIONS.map((mission) => (
          <li key={mission.label}>
            <span aria-hidden="true">{mission.emoji}</span> {mission.label}
          </li>
        ))}
      </ul>

      <button type="button" className="btn ghost wide" onClick={onRestart}>
        Run the challenge again
      </button>
    </section>
  );
}
