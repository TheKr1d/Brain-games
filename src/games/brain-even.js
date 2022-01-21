import { engine, rounds } from '../index.js';
import randomNum from '../getRandomNumber.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkParityNum = (num) => (num % 2 === 0);

const getQuestionAndAnswer = () => {
  const resultArr = [];

  for (let i = 0; i !== rounds; i += 1) {
    const getRandomNum = randomNum(1, 1000);
    const correctAnswer = checkParityNum(getRandomNum) ? 'yes' : 'no';
    resultArr.push([getRandomNum, correctAnswer]);
  }
  return resultArr;
};

export default function brainEven() {
  engine(condition, getQuestionAndAnswer());
}
