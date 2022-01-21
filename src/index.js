import readlineSync from 'readline-sync';

// Двигатель игры       (О_-)

// Алгоритм взаимодействия с игроком, принимает на вход правила игры и массив:
// [вопрос, ответ], [вопрос, ответ], [вопрос, ответ]

export const rounds = 3;
export const engine = (condition, arrQuestionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);

  const quantityRaunds = arrQuestionsAndAnswers.length;
  for (let i = 0; i !== quantityRaunds; i += 1) {
    const item = arrQuestionsAndAnswers[i];
    const [question, correctAnswer] = item;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
