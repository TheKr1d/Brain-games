import { engine, rounds } from '../index.js';
import randomNum from '../getRandomNumber.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrimeNum = (num) => {
  for (let i = 2; Math.sqrt(num) > i; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function generateRoundsData() {
  const roundsData = [];

  for (let i = 0; i !== rounds; i += 1) {
    const question = randomNum(5, 100);
    const answer = checkPrimeNum(question) ? 'yes' : 'no';
    roundsData.push([question, answer]);
  }
  return roundsData;
}
export default function brainPrime() {
  engine(condition, generateRoundsData());
}
