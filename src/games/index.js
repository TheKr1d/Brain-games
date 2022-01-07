import readlineSync from 'readline-sync';

const operators = ['+', '-', '*'];

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
    i += 1;
  }
  return console.log(`Congratulations, ${name}!`);
};

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

export const randomNumber = () => Math.floor(Math.random() * 1000);
export const rendomOperator = () => operators[Math.floor(Math.random() * (operators.length - 1))];
