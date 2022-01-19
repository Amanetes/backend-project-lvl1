import generateRounds from '../index.js';
import getRandomNumber from '../randomizer.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (initialNumber, step, length) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    progression.push(initialNumber + (step * i));
  }
  return progression;
};

const hide = (progression, hiddenIndex) => {
  const hiddenArr = progression.slice();
  hiddenArr[hiddenIndex] = '..';
  return hiddenArr.join(' ');
};

const getGameResult = () => {
  const randomInitialNumber = getRandomNumber(0, 100);
  const randomStep = getRandomNumber(1, 10);
  const randomLength = getRandomNumber(5, 10);
  const progression = getProgression(randomInitialNumber, randomStep, randomLength);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  const gameQuestion = String(hide(progression, hiddenIndex));
  return [gameQuestion, correctAnswer];
};

const startProgressionGame = () => generateRounds(gameRules, getGameResult);

export default startProgressionGame;
