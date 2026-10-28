import { useState } from 'react';
import { CARDS, CLUES, SOLVED_ORDER } from './data/activity.js';
import StepTrail from './components/StepTrail.jsx';
import Hook from './components/Hook.jsx';
import CardChallenge from './components/CardChallenge.jsx';
import QuizClue from './components/QuizClue.jsx';
import PuzzleSolved from './components/PuzzleSolved.jsx';
import ThinkPairShare from './components/ThinkPairShare.jsx';
import LessonTransition from './components/LessonTransition.jsx';

const STAGE = { hook: -1, cards: 0, clue: 1, solved: 2, share: 3, lesson: 4 };

export default function App() {
  const [step, setStep] = useState('hook');
  const [clueIndex, setClueIndex] = useState(0);
  const [picked, setPicked] = useState([]);

  const solvedCards = SOLVED_ORDER.map((id) => CARDS.find((card) => card.id === id));
  const pickedCards = picked.map((id) => CARDS.find((card) => card.id === id));

  function toggleCard(id) {
    setPicked((prev) => {
      if (prev.includes(id)) return prev.filter((cardId) => cardId !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  }

  function passClue() {
    if (clueIndex < CLUES.length - 1) {
      setClueIndex(clueIndex + 1);
      return;
    }
    setStep('solved');
  }

  function restart() {
    setPicked([]);
    setClueIndex(0);
    setStep('hook');
  }

  return (
    <div className="app">
      <div className="shell">
        <header className="brand">
          <span className="brand-mark" aria-hidden="true">
            ◈
          </span>
          <span>Charlie&rsquo;s Chocolate Factory · Factory Expert Team</span>
        </header>

        <StepTrail stage={STAGE[step]} />

        {step === 'hook' && <Hook onStart={() => setStep('cards')} />}

        {step === 'cards' && (
          <CardChallenge
            picked={picked}
            onToggle={toggleCard}
            onLock={() => {
              setClueIndex(0);
              setStep('clue');
            }}
          />
        )}

        {step === 'clue' && (
          <QuizClue
            key={CLUES[clueIndex].id}
            clue={CLUES[clueIndex]}
            index={clueIndex}
            total={CLUES.length}
            onPass={passClue}
          />
        )}

        {step === 'solved' && (
          <PuzzleSolved
            solvedCards={solvedCards}
            pickedCards={pickedCards}
            onNext={() => setStep('share')}
          />
        )}

        {step === 'share' && <ThinkPairShare onNext={() => setStep('lesson')} />}

        {step === 'lesson' && <LessonTransition onRestart={restart} />}
      </div>

      <footer className="footer">
        <span>Hands-on mystery challenge · Build Charlie&rsquo;s Chocolate Factory</span>
        {step !== 'hook' && (
          <button type="button" className="link-btn" onClick={restart}>
            Start over
          </button>
        )}
      </footer>
    </div>
  );
}
