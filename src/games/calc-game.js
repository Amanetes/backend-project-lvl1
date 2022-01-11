import { gameRoundGenerator, getRandomNumber } from '../index.js';

// Правила игры
const gameRules = 'What is the result of the expression?';
// Рандомизация математических операторов
const operators = ['+', '-', '*'];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

// Логика игры
const gameLogic = () => {
  const firstNum = getRandomNumber(0, 100);
  const secondNum = getRandomNumber(0, 100);
  const gameQuestion = `${firstNum} ${randomOperator} ${secondNum}`;
  let sum = 0;
  const gameResult = [];
  switch (randomOperator) {
    case '+':
      sum = firstNum + secondNum;
      break;
    case '-':
      sum = firstNum - secondNum;
      break;
    case '*':
      sum = firstNum * secondNum;
      break;
    default:
      return null;
  }
  const correctAnswer = `${sum}`;
  gameResult.push(gameQuestion, correctAnswer);
  return gameResult;
};

const startCalcGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startCalcGame;
