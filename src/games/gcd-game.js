import { gameRoundGenerator, getRandomNumber } from '../index.js';
// Правила игры

const gameRules = 'Find the greatest common divisor of given numbers.';

const greatestDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestDivisor(b, a % b);
};

const gameLogic = () => {
  const firstNum = getRandomNumber(0, 100);
  const secondNum = getRandomNumber(0, 100);
  const gameResult = [];
  const gameQuestion = `${firstNum} ${secondNum}`;
  const correctAnswer = `${greatestDivisor(firstNum, secondNum)}`;
  gameResult.push(gameQuestion, correctAnswer);
  return gameResult;
};

const startGcdGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startGcdGame;
