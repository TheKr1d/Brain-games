import { engine, rounds } from '../index.js';
import randomNum from '../functions.js';

const condition = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

function getArrQuestionAndAnswer() {
  const result = [];

  for (let i = 0; i !== rounds; i += 1) {
    const randomNum1 = randomNum(2, 20);
    const randomNum2 = randomNum(2, 20);
    const getQuestion = `${randomNum1} ${randomNum2}`;
    const getIntersections = String(gcd(randomNum1, randomNum2));
    result.push([getQuestion, getIntersections]);
  }
  return result;
}
export default function brainGcd() {
  engine(condition, getArrQuestionAndAnswer());
}
