import generateRounds from '../index.js';
import getRandomNumber from '../randomizer.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  const radicand = Math.sqrt(number);
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= radicand; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getGameResult = () => {
  const number = getRandomNumber(0, 100);
  const gameQuestion = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const startProgGame = () => generateRounds(gameRules, getGameResult);

export default startProgGame;
