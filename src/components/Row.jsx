import Tile from './Tile';

const WORD_LENGTH = 5;

export default function Row({ guess, currentGuess }) {
  if (guess) {
    return (
      <div className="row">
        {guess.map((item, i) => (
          <Tile key={i} letter={item.letter} status={item.status} />
        ))}
      </div>
    );
  }

  if (currentGuess !== null && currentGuess !== undefined) {
    const letters = currentGuess.split('');
    const tiles = Array.from({ length: WORD_LENGTH }, (_, i) => letters[i] || '');
    return (
      <div className="row">
        {tiles.map((letter, i) => (
          <Tile key={i} letter={letter} status="" />
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      {Array.from({ length: WORD_LENGTH }).map((_, i) => (
        <Tile key={i} letter="" status="" />
      ))}
    </div>
  );
}