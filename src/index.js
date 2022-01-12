import readlineSync from 'readline-sync';

// Двигатель игры       (О_-)

// Алгоритм взаимодействия с игроком, принимает на вход правила игры и массив:
// [вопрос, ответ], [вопрос, ответ], [вопрос, ответ]

export const raunds = 3;
export const engine = (condition, quest) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  let i = 0;
  while (i !== raunds) {
    const item = quest[i];
    const [myQuestion, myAnswer] = item;
    console.log(`Question: ${myQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== String(myAnswer)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${myAnswer}"\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
