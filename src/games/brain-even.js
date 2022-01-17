import { engine, rounds } from '../index.js';
import randomNum from '../functions.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const resultArr = [];

  for (let i = 0; i !== rounds; i += 1) {
    const getRandomNum = randomNum(1, 1000);
    if (getRandomNum % 2 === 0) {
      resultArr.push([getRandomNum, 'yes']);
    } else {
      resultArr.push([getRandomNum, 'no']);
    }
  }
  return resultArr;
};

export default function brainEven() {
  engine(condition, getQuestionAndAnswer());
}
