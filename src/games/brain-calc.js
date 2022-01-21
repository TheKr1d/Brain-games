import { engine, rounds } from '../index.js';
import randomNum from '../getRandomNumber.js';

const condition = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getExpression = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    default:
      return null;
  }
};

function getQuestionAndAnswer() {
  const resultArr = [];

  for (let i = 0; i !== rounds; i += 1) {
    const getRandomNum1 = randomNum(1, 1000);
    const getRandomNum2 = randomNum(1, 1000);
    const randomOperator = operators[randomNum(0, operators.length - 1)];

    const question = `${getRandomNum1} ${randomOperator} ${getRandomNum2}`;
    const answer = String(getExpression(getRandomNum1, getRandomNum2, randomOperator));
    resultArr.push([question, answer]);
  }
  return resultArr;
}
export default function brainCalc() {
  engine(condition, getQuestionAndAnswer());
}
