export function normalize(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function matchesAnswer(input, room) {
  const guess = normalize(input);
  if (!guess) return false;
  if (room.answers.some((answer) => normalize(answer) === guess)) return true;
  return guess.includes(room.keyword);
}

export function matchesCode(input, code) {
  return normalize(input) === normalize(code);
}
