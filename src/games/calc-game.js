import gameRoundGenerator from '../index.js';
import getRandomNumber from '../randomizer.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const randomOperator = operators[getRandomNumber(0, operators.length - 1)];

const calculate = (a, b) => {
  switch (randomOperator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`operation ${randomOperator} is not supported`);
  }
};

const gameLogic = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const gameQuestion = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = String(calculate(firstNumber, secondNumber));
  return [gameQuestion, correctAnswer];
};

const startCalcGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startCalcGame;
