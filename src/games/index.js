import readlineSync from 'readline-sync';

// Библиотека функций        (О_-)

// Алгоритм взаимодействия с игроком, принимает на вход правила игры и массив:
// [вопрос, ответ], [вопрос, ответ], [вопрос, ответ]
export const engine = (condition, quest) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const name = userName;
  console.log(condition);
  let i = 0;
  while (i !== 3) {
    const item = quest[i];
    console.log(`Question: ${item[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== String(item[1])) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${item[1]}"\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
    i += 1;
  }
  return console.log(`Congratulations, ${name}!`);
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
