import Row from './Row';

export default function Board({ guesses, currentGuess, turn }) {
  return (
    <div className="board">
      {guesses.map((guess, index) => {
        const isCurrentRow = index === turn;
        return (
          <Row
            key={index}
            guess={guess}
            currentGuess={isCurrentRow ? currentGuess : null}
          />
        );
      })}
    </div>
  );
}