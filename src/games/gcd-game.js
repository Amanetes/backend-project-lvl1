import gameRoundGenerator from '../index.js';
import getRandomNumber from '../randomizer.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const greatestDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestDivisor(b, a % b);
};

const gameLogic = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${greatestDivisor(firstNumber, secondNumber)}`;
  return [gameQuestion, correctAnswer];
};

const startGcdGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startGcdGame;
