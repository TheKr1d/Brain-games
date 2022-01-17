import { engine, rounds } from '../index.js';
import randomNum from '../functions.js';

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
      return null;
  }
};

function getQuestionAndAnswer() {
  const randomOperator = () => {
    const operators = ['+', '-', '*'];
    const maxIndex = operators.length - 1;
    return operators[randomNum(0, maxIndex)];
  };
  const resultArr = [];

  for (let i = 0; i !== rounds; i += 1) {
    const getRandomNum1 = randomNum(1, 1000);
    const getRandomNum2 = randomNum(1, 1000);
    const getOperator = randomOperator();

    const question = `${getRandomNum1} ${getOperator} ${getRandomNum2}`;
    const answer = String(getExpression(getRandomNum1, getRandomNum2, getOperator));
    resultArr.push([question, answer]);
  }
  return resultArr;
}
export default function brainCalc() {
  engine(condition, getQuestionAndAnswer());
}
