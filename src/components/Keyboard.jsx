const ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
];

export default function Keyboard({ usedKeys, onKeyPress }) {
  return (
    <div className="keyboard">
      {ROWS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key) => {
            const status = usedKeys[key];
            const className = `key ${status ? status : ''} ${
              key.length > 1 ? 'wide' : ''
            }`.trim();
            return (
              <button
                key={key}
                className={className}
                onClick={() => onKeyPress(key)}
              >
                {key === 'Backspace' ? '⌫' : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}