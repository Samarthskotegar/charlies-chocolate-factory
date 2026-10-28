import { ROOMS } from '../data/rooms.js';

export default function ClueTrail({ solved, activeId }) {
  return (
    <ol className="trail" aria-label="Rooms">
      {ROOMS.map((room) => {
        const isSolved = solved.includes(room.id);
        const isActive = room.id === activeId && !isSolved;
        const className = ['trail-item', isSolved && 'is-solved', isActive && 'is-active']
          .filter(Boolean)
          .join(' ');

        return (
          <li key={room.id} className={className}>
            <span className="dot" aria-hidden="true">
              {isSolved ? room.letter : room.numeral}
            </span>
            <span className="sr-only">
              {room.name}: {isSolved ? 'opened' : 'sealed'}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
