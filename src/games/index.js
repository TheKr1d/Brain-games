import readlineSync from 'readline-sync';

// Библиотека функций        (О_-)

// Алгоритм взаимодействия с игроком, принимает на вход правила игры и массив:
// [вопрос, ответ], [вопрос, ответ], [вопрос, ответ]
export const engine = (condition, quest) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  let i = 0;
  while (i !== 3) {
    const item = quest[i];
    let [myQuestion, myAnswer] = item;
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

// Получить из строки выражение.
export const getStringFromArrey = (arr) => {
  const arrString = String(arr).split(' ');
  switch (arrString[1]) {
    case '-':
      return Number(arrString[0]) - Number(arrString[2]);
    case '*':
      return Number(arrString[0]) * Number(arrString[2]);
    case '+':
      return Number(arrString[0]) + Number(arrString[2]);
    default:
      break;
  }
  return null;
};

// Получить рандомно оператор.
const operators = ['+', '-', '*'];
export const randomOperator = () => operators[Math.floor(Math.random() * (operators.length - 1))];

// получить массив всех делителей
export const getArrDiv = (num) => {
  let i = 1;
  const result = [];

  while (i <= num) {
    if (num % i === 0) {
      result.push(i);
      i += 1;
    } else {
      i += 1;
    }
  }
  return result;
};

// Определение простого числа
export const getPrimeNum = (num) => {
  let flug = 'yes';

  for (let i = 2; num > i; i += 1) {
    if (num % i === 0) {
      flug = 'no';
      break;
    }
  }
  return flug;
};
