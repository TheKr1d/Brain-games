import readlineSync from 'readline-sync';

// Двигатель игры       (О_-)

// Алгоритм взаимодействия с игроком, принимает на вход правила игры и массив:
// ('Правила игры', [[вопрос, ответ], [вопрос, ответ], [вопрос, ответ]])

const textColor = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[95m',
  cyan: '\x1b[103m',
  reset: '\x1b[0m',
};
const backgroundColor = {
  magenta: '\x1b[45m',
};
export const rounds = 3;
export const engine = (condition, roundsData) => {
  console.log(`${textColor.blue} Welcome to the Brain Games!`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${backgroundColor.magenta}Hello, ${userName}!${textColor.reset}`);
  console.log(`${textColor.yellow}${condition}`);

  const quantityRounds = roundsData.length;
  for (let i = 0; i !== quantityRounds; i += 1) {
    const [question, correctAnswer] = roundsData[i];
    console.log(`${textColor.yellow}Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${textColor.red}"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${userName}!`);
      return;
    }
    console.log(`${textColor.green}Correct!`);
  }
  console.log(`${textColor.magenta}Congratulations, ${userName}!`);
};
