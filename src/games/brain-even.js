import { engine, rounds } from '../index.js';
import randomNum from '../getRandomNumber.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkParityNum = (num) => (num % 2 === 0);

const generateRoundsData = () => {
  const roundsData = [];

  for (let i = 0; i !== rounds; i += 1) {
    const getRandomNum = randomNum(1, 1000);
    const correctAnswer = checkParityNum(getRandomNum) ? 'yes' : 'no';
    roundsData.push([getRandomNum, correctAnswer]);
  }
  return roundsData;
};

export default function brainEven() {
  engine(condition, generateRoundsData());
}
