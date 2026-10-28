export default function ThingCard({ item, selected, onClick }) {
  return (
    <button
      type="button"
      className={`thing${selected ? ' is-selected' : ''}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className="thing-emoji" aria-hidden="true">
        {item.emoji}
      </span>
      <span className="thing-label">{item.label}</span>
      {selected && (
        <span className="thing-check" aria-hidden="true">
          ✓
        </span>
      )}
    </button>
  );
}
