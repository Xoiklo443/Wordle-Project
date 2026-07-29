# Wordle React

A clone of Wordle built with React and Vite. Guess the five-letter word in six tries — each guess is colored to show how close you were.

## How it works

- **Green** — correct letter, correct position
- **Yellow** — correct letter, wrong position
- **Grey** — letter not in the word

## Tech stack

- React
- Vite

## Project structure

```
src/
├── main.jsx              # entry point
├── App.jsx                # top-level component
├── App.css                 # styling
├── data/
│   └── words.js            # word list + random word picker
├── utils/
│   └── checkGuess.js       # green/yellow/grey grading logic
├── hooks/
│   └── useWordle.js        # game state and rules
└── components/
    ├── Tile.jsx             # single letter square
    ├── Row.jsx              # one row of 5 tiles
    ├── Board.jsx            # the 6x5 grid
    └── Keyboard.jsx         # on-screen keyboard
```

The project is split into layers: word data, the grading logic, game state, and the UI components. Each layer only knows about the one below it.

## Getting started

Clone the repo and install dependencies:

```bash
git clone https://github.com/BipenKhanal/Wordle.git
cd Wordle
npm install
```

Run the dev server:

```bash
npm run dev
```

Open the local URL it prints (usually `http://localhost:5173`).

## Playing

Type letters using your keyboard or the on-screen keyboard, then press Enter to submit a guess. You have 6 tries to find the word.

## Possible improvements

- Validate guesses against a real dictionary
- Reject guesses that are too short with a shake animation
- Save stats (games played, win streak) with `localStorage`
- Add a flip animation when a guess is submitted

## License

MIT
