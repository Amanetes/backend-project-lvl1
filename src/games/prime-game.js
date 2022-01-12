import { gameRoundGenerator, getRandomNumber } from '../index.js';

// Правила игры

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

// Определение функции простоты числа
// делится без остатка только на 1 и само на себя

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= (number / 2); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const gameLogic = () => {
  const number = getRandomNumber(0, 100);
  const gameQuestion = `${number}`;
  const gameResult = [];
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  gameResult.push(gameQuestion, correctAnswer);
  return gameResult;
};

const startProgGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startProgGame;
