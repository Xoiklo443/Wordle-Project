import { useState, useEffect } from 'react';
import { getRandomWord } from './data/words';
import { useWordle } from './hooks/useWordle';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './App.css';

export default function App() {
  const [answer, setAnswer] = useState(() => getRandomWord());
  const {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    isGameOver,
    handleKeyup,
  } = useWordle(answer);

  useEffect(() => {
    if (isGameOver) return;

    const onKeyDown = (e) => handleKeyup(e.key);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleKeyup, isGameOver]);

  function playAgain() {
    setAnswer(getRandomWord());
    window.location.reload();
  }

  return (
    <div className="app">
      <h1>Wordle</h1>
      <Board guesses={guesses} currentGuess={currentGuess} turn={turn} />

      {isGameOver && (
        <div className="game-over">
          {isCorrect ? (
            <p>You got it! 🎉</p>
          ) : (
            <p>Out of tries. The word was: <strong>{answer}</strong></p>
          )}
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}

      <Keyboard usedKeys={usedKeys} onKeyPress={handleKeyup} />
    </div>
  );
}