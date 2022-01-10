import _ from 'lodash';
import engine from '../index.js';
import {
  getStringFromArrey, randomOperator,
} from '../functions.js';

const condition = 'What is the result of the expression?';

function getQuestionAndAnswer() {
  let rounds = 0;
  const resultArr = [];

  while (rounds !== 3) {
    const arr = [];
    arr.push(`${_.random(1, 1000)} ${randomOperator()} ${_.random(1, 1000)}`);
    arr.push(getStringFromArrey(arr[0]));
    resultArr[rounds] = arr;
    rounds += 1;
  }
  return resultArr;
}
export default function brainCalc() {
  engine(condition, getQuestionAndAnswer());
}
