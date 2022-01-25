import { engine, rounds } from '../index.js';
import randomNum from '../getRandomNumber.js';

const condition = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

function generateRoundsData() {
  const roundsData = [];

  for (let i = 0; i !== rounds; i += 1) {
    const randomNum1 = randomNum(2, 20);
    const randomNum2 = randomNum(2, 20);
    const question = `${randomNum1} ${randomNum2}`;
    const answer = String(gcd(randomNum1, randomNum2));
    roundsData.push([question, answer]);
  }
  return roundsData;
}
export default function brainGcd() {
  engine(condition, generateRoundsData());
}
