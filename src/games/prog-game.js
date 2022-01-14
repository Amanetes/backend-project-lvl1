import gameRoundGenerator from '../index.js';
import getRandomNumber from '../randomizer.js';

const gameRules = 'What number is missing in the progression?';

const getProg = (initialNumber, step, length) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    const result = initialNumber + (step * i);
    progression.push(result);
  }
  return progression;
};

const hide = (progression, hiddenIndex) => {
  const hiddenArr = progression;
  hiddenArr[hiddenIndex] = '..';
  return hiddenArr.join(' ');
};

const gameLogic = () => {
  const randomInitialNumber = getRandomNumber(0, 100);
  const randomStep = getRandomNumber(1, 10);
  const randomLength = getRandomNumber(5, 10);
  const progression = getProg(randomInitialNumber, randomStep, randomLength);
  const getIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = `${progression[getIndex]}`;
  const gameQuestion = `${hide(progression, getIndex)}`;
  return [gameQuestion, correctAnswer];
};

const startProgGame = () => gameRoundGenerator(gameRules, gameLogic);

export default startProgGame;
