export const CARDS = [
  { id: 'building', emoji: '🏭', label: 'Factory Building' },
  { id: 'machines', emoji: '⚙️', label: 'Machines' },
  { id: 'ingredients', emoji: '🍫', label: 'Raw Materials' },
  { id: 'finance', emoji: '💰', label: 'Finance Team' },
  { id: 'singing', emoji: '🎤', label: 'Singing Team' },
  { id: 'football', emoji: '⚽', label: 'Football Team' },
  { id: 'gaming', emoji: '🎮', label: 'Gaming Team' },
  { id: 'circus', emoji: '🎪', label: 'Circus Team' },
  { id: 'workers', emoji: '👨‍🏭', label: 'Factory Workers' },
  { id: 'band', emoji: '🎸', label: 'Music Band' },
];

// The order the program reveals them in.
export const SOLVED_ORDER = ['building', 'workers', 'ingredients'];

export const CLUES = [
  {
    id: 'clue-1',
    question: 'Can Charlie make chocolate without ingredients?',
    options: [
      { label: 'Yes', correct: false },
      { label: 'No', correct: true },
    ],
    discovery: 'ingredients',
    note: 'No ingredients, no chocolate — raw materials come first.',
  },
  {
    id: 'clue-2',
    question: 'Who will make the chocolates and run the factory?',
    options: [
      { label: 'Football Team', correct: false },
      { label: 'Factory Workers', correct: true },
      { label: 'Music Band', correct: false },
    ],
    discovery: 'workers',
    note: 'Skilled workers turn ingredients into chocolate.',
  },
  {
    id: 'clue-3',
    question: 'Where will Charlie make the chocolates?',
    options: [
      { label: 'Circus Tent', correct: false },
      { label: 'Factory Building', correct: true },
      { label: 'Playground', correct: false },
    ],
    discovery: 'building',
    note: 'A factory needs a roof, floors and room to grow.',
  },
];

export const NEXT_IDEAS = [
  { id: 'machines', emoji: '⚙️', label: 'Machines' },
  { id: 'finance', emoji: '💰', label: 'Finance Team' },
  { id: 'packaging', emoji: '📦', label: 'Packaging Team' },
  { id: 'marketing', emoji: '📢', label: 'Marketing Team' },
  { id: 'safety', emoji: '🦺', label: 'Safety Team' },
];

export const MISSIONS = [
  { emoji: '💡', label: 'Innovation' },
  { emoji: '➗', label: 'Mathematics' },
  { emoji: '💵', label: 'Budgeting' },
  { emoji: '🌱', label: 'Sustainability' },
  { emoji: '📣', label: 'Advertising' },
  { emoji: '💬', label: 'Customer Feedback' },
];
