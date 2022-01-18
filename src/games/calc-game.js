import generateRounds from '../index.js';
import getRandomNumber from '../randomizer.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

const getGameResult = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const gameQuestion = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = String(calculate(firstNumber, secondNumber, randomOperator));
  return [gameQuestion, correctAnswer];
};

const startCalcGame = () => generateRounds(gameRules, getGameResult);

export default startCalcGame;
