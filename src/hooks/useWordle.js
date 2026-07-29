import { useState } from 'react';
import { checkGuess } from '../utils/checkGuess';

const WORD_LENGTH = 5;
const MAX_TURNS = 6;

export function useWordle(answer) {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState(Array(MAX_TURNS).fill(null));
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  const isGameOver = isCorrect || turn >= MAX_TURNS;

  function addLetter(letter) {
    if (currentGuess.length >= WORD_LENGTH) return;
    setCurrentGuess((prev) => prev + letter);
  }

  function removeLetter() {
    setCurrentGuess((prev) => prev.slice(0, -1));
  }

  function updateUsedKeys(formattedGuess) {
    setUsedKeys((prev) => {
      const next = { ...prev };
      const rank = { absent: 0, present: 1, correct: 2 };

      formattedGuess.forEach(({ letter, status }) => {
        const existing = next[letter];
        if (!existing || rank[status] > rank[existing]) {
          next[letter] = status;
        }
      });

      return next;
    });
  }

  function submitGuess() {
    if (isGameOver) return;
    if (currentGuess.length !== WORD_LENGTH) return;

    const formattedGuess = checkGuess(currentGuess, answer);

    setGuesses((prev) => {
      const newGuesses = [...prev];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    updateUsedKeys(formattedGuess);

    if (currentGuess === answer) {
      setIsCorrect(true);
    }

    setTurn((prev) => prev + 1);
    setCurrentGuess('');
  }

  function handleKeyup(key) {
    if (isGameOver) return;

    if (key === 'Enter') {
      submitGuess();
    } else if (key === 'Backspace') {
      removeLetter();
    } else if (/^[a-zA-Z]$/.test(key)) {
      addLetter(key.toLowerCase());
    }
  }

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    isGameOver,
    handleKeyup,
  };
}