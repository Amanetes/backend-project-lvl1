import gameRoundGenerator from '../index.js';
import getRandomNumber from '../randomizer.js';

// Правила игры

const gameRules = 'What number is missing in the progression?';

const getProg = (a, step) => {
  const progArr = [];
  for (let i = 0; i <= getRandomNumber(5, 10); i += 1) {
    const result = a + (step * i);
    progArr.push(result);
  }
  return progArr;
};
const hide = (arr, num) => {
  const hideNum = '..';
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr.indexOf(arr[i]) === num) {
      newArr.push(hideNum);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const gameLogic = () => {
  const progElem = getRandomNumber(0, 100);
  const progStep = getRandomNumber(1, 10);
  const prog = getProg(progElem, progStep);
  const gameResult = [];
  const getIndex = getRandomNumber(0, prog.length - 1);
  const hiddenArr = hide(prog, getIndex);
  const gameQuestion = `${hiddenArr.join(' ')}`;
  const correctAnswer = `${prog[getIndex]}`;
  gameResult.push(gameQuestion, correctAnswer);
  return gameResult;
};

const startProgGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startProgGame;
