import gameRoundGenerator from '../index.js';
import getRandomNumber from '../randomizer.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  const halfNumber = number / 2;
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= halfNumber; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const gameLogic = () => {
  const number = getRandomNumber(0, 100);
  const gameQuestion = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const startProgGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startProgGame;
