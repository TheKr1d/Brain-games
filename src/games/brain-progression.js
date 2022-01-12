import { engine, raunds } from '../index.js';
import { randomNum } from '../functions.js';

const condition = 'What number is missing in the progression?';

function getArrQuestionAndAnswer() {
  const resultArr = [];
  for (let i = 0; i !== raunds; i += 1) {
    let quantityNum = 0;
    let step = 0;
    let firstNum = 0;
    let secretNum = 0;

    quantityNum = randomNum(5, 10);
    firstNum = randomNum(1, 1000);
    secretNum = randomNum(5, quantityNum);
    step = randomNum(10, 30);

    const getQuestion = [firstNum];

    for (let i2 = quantityNum; i2 !== 0; i2 -= 1) {
      getQuestion.push(getQuestion[getQuestion.length - 1] + step);
    }
    const answer = getQuestion[secretNum];
    getQuestion[secretNum] = '..';
    const getJoinArr = getQuestion.join(' ');
    const result = [getJoinArr, String(answer)];
    resultArr.push(result);
  }
  return resultArr;
}

export default function brainProgression() {
  engine(condition, getArrQuestionAndAnswer());
}
