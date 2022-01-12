import { engine, raunds } from '../index.js';
import {
  getPrimeNum, randomNum,
} from '../functions.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeYesOrNo = (num) => (getPrimeNum(num) ? 'yes' : 'no');

function getArrQuestionAndAnswer() {
  const resultArr = [];

  for (let i = 0; i !== raunds; i += 1) {
    const getRandomNum = randomNum(2, 100);
    const arr = [getRandomNum, primeYesOrNo(getRandomNum)];
    resultArr.push(arr);
  }
  return resultArr;
}
export default function brainPrime() {
  engine(condition, getArrQuestionAndAnswer());
}
