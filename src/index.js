import readlineSync from 'readline-sync';

// number randomizer
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const roundCount = 3;
// Генератор раундов, взаимодействие с пользователем
const gameRoundGenerator = (gameRules, gameLogic) => {
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 1; i <= roundCount; i += 1) {
    const [gameQuestion, correctAnswer] = gameLogic();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export { getRandomNumber, gameRoundGenerator };
