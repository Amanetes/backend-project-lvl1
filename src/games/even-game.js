import readlineSync from 'readline-sync';
// рандомизатор чисел
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// инициализация правил и количества раундов
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundCount = 3;

const startEvenGame = () => {
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  // зацикливание процесса до 3х раундов
  for (let i = 1; i <= roundCount; i += 1) {
    const number = randomNumber(0, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else if (number % 2 === 0 && answer === 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes')`);
      console.log(`Let's try again, ${name}`);
      return;
    } else if (number % 2 !== 0 && answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no')`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default startEvenGame;
