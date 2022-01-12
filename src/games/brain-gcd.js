import { engine, raunds } from '../index.js';
import {
  gcd, randomNum,
} from '../functions.js';

const condition = 'Find the greatest common divisor of given numbers.';

function getArrQuestionAndAnswer() {
  const result = [];

  for (let i = 0; i !== raunds; i += 1) {
    let randomQuestion1 = '';
    let randomQuestion2 = '';
    randomQuestion1 = randomNum(2, 20);
    randomQuestion2 = randomNum(2, 20);
    const getQuestion = `${randomQuestion1} ${randomQuestion2}`;
    const getIntersections = gcd(randomQuestion1, randomQuestion2);
    result.push([getQuestion, getIntersections]);
  }
  return result;
}
export default function brainGcd() {
  engine(condition, getArrQuestionAndAnswer());
}
