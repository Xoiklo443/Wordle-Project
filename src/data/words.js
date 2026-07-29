export const WORDS = [
  'apple', 'brave', 'crane', 'dwelt', 'eagle',
  'flame', 'grape', 'house', 'ivory', 'jolly',
  'knife', 'lemon', 'mango', 'night', 'ocean',
  'piano', 'quilt', 'river', 'stone', 'tiger',
  'umbra', 'vapor', 'water', 'xenon', 'yield',
  'zebra',
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}