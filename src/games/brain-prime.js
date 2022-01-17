import { engine, rounds } from '../index.js';
import randomNum from '../functions.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrimeNum = (num) => {
  for (let i = 2; (num / 2) > i; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeYesOrNo = (num) => (checkPrimeNum(num) ? 'yes' : 'no');

function getArrQuestionAndAnswer() {
  const resultArr = [];

  for (let i = 0; i !== rounds; i += 1) {
    const question = randomNum(2, 100);
    const answer = primeYesOrNo(question);
    resultArr.push([question, answer]);
  }
  return resultArr;
}
export default function brainPrime() {
  engine(condition, getArrQuestionAndAnswer());
}
