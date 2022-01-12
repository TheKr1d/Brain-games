import { engine, raunds } from '../index.js';
import { randomNum } from '../functions.js';

const condition = 'What is the result of the expression?';

const getExpression = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    default:
      break;
  }
  return null;
};

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const maxNum = operators.length - 1;
  return operators[randomNum(0, maxNum)];
};

function getQuestionAndAnswer() {
  let i = 0;
  const resultArr = [];

  while (i !== raunds) {
    const arr = [];
    const getRandomNum1 = randomNum(1, 1000);
    const getRandomNum2 = randomNum(1, 1000);
    const getOperators = randomOperator();

    arr.push(`${getRandomNum1} ${getOperators} ${getRandomNum2}`);
    arr.push(getExpression(getRandomNum1, getRandomNum2, getOperators));
    resultArr[i] = arr;
    i += 1;
  }
  return resultArr;
}
export default function brainCalc() {
  engine(condition, getQuestionAndAnswer());
}
