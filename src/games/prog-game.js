import { gameRoundGenerator, getRandomNumber } from '../index.js';

// Правила игры

const gameRules = 'What number is missing in the progression?';

// Функция арифметической прогрессии, которая строит прогрессию длиной
// от 5 до 10 чисел
const getProg = (a, step) => {
  const progArr = [];
  for (let i = 0; i <= getRandomNumber(5, 10); i += 1) {
    // вычисление результата по формуле нахождения члена прогрессии
    const result = a + (step * i);
    progArr.push(result);
  }
  return progArr;
};
// Функция скрывания элемента прогрессии
const hide = (arr, num) => {
  const hideNum = '..';
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    // необходимо сравнить индекс массива с переданным аргументом
    if (arr.indexOf(arr[i]) === num) {
      newArr.push(hideNum);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const gameLogic = () => {
  // создание прогрессии в игре со случайными элементами
  const progElem = getRandomNumber(0, 100);
  const progStep = getRandomNumber(1, 10);
  // Создаем для удобства константу prog и помещаем в нее результат работы функции
  const prog = getProg(progElem, progStep);
  const gameResult = [];
  // массив куда будет добавляться результат игры - вопрос и ответ для сравнения итога
  // Получение случайного порядкового номера элемента прогрессии
  // т.к элементы в массиве или строки начинаются с 0, то первым значением будет 0
  // а последним длина массива или строки - 1
  const getIndex = getRandomNumber(0, prog.length - 1);
  // Прячем символы массива с помощью функции hide
  const hiddenArr = hide(prog, getIndex);
  // Константы вопроса игры и правильного ответа
  // Приводим скрытый массив к строке
  const gameQuestion = `${hiddenArr.join(' ')}`;
  // правильным ответом будет случайный элемент массива с прогрессией
  const correctAnswer = `${prog[getIndex]}`;
  // Результат игры
  gameResult.push(gameQuestion, correctAnswer);
  return gameResult;
};

const startProgGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startProgGame;
