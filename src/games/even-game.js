import { gameRoundGenerator, getRandomNumber } from '../index.js';
// Правила игры

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка четности
const isEven = (number) => (number % 2 === 0);

// Описание логики работы игры: генерация случайного числа и проверка четности

const gameLogic = () => {
  // Генерация случайного числа в вопросе
  const number = getRandomNumber(0, 100);
  const gameQuestion = `${number}`;
  const gameResult = [];
  // Условие получения правильного ответа
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  // Возврат правильного ответа и вопроса из функции
  gameResult.push(gameQuestion, correctAnswer);
  return gameResult;
};
// Функция запуска игры, которая возвращает генератор раундов
// Генератор в свою очередь принимает правила, которые выводит в консоль
// И логику игры

const startEvenGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startEvenGame;
