import generateRounds from '../index.js';
import getRandomNumber from '../randomizer.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const getGameResult = () => {
  const number = getRandomNumber(0, 100);
  const gameQuestion = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const startEvenGame = () => generateRounds(gameRules, getGameResult);

export default startEvenGame;
