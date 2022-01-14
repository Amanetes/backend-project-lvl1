import gameRoundGenerator from '../index.js';
import getRandomNumber from '../randomizer.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

const calculate = (a, b) => {
  let sum = 0;
  switch (randomOperator) {
    case '+':
      sum = a + b;
      break;
    case '-':
      sum = a - b;
      break;
    case '*':
      sum = a * b;
      break;
    default:
      return null;
  }
  return sum;
};

const gameLogic = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const gameQuestion = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = `${calculate(firstNumber, secondNumber)}`;
  return [gameQuestion, correctAnswer];
};

const startCalcGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startCalcGame;
