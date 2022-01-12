import { engine, raunds } from '../index.js';
import {
  randomNum,
} from '../functions.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  let i = 0;
  const resultArr = [];

  while (i !== raunds) {
    const item = [randomNum(1, 1000)];
    if (item[0] % 2 === 0) {
      item.push('yes');
      resultArr.push(item);
      i += 1;
    } else {
      item.push('no');
      resultArr.push(item);
      i += 1;
    }
  }
  return resultArr;
};

export default function brainEven() {
  engine(condition, getQuestionAndAnswer());
}
