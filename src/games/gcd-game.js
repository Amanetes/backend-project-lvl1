import generateRounds from '../index.js';
import getRandomNumber from '../randomizer.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGreatestDivisor(b, a % b);
};

const getGameResult = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(findGreatestDivisor(firstNumber, secondNumber));
  return [gameQuestion, correctAnswer];
};

const startGcdGame = () => generateRounds(gameRules, getGameResult);

export default startGcdGame;
