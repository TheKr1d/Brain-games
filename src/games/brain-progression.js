import { engine, rounds } from '../index.js';
import randomNum from '../getRandomNumber.js';

const condition = 'What number is missing in the progression?';

function getProgression(start, quantity, step) {
  const progression = [];
  for (let i = 0; i < quantity; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
}

function getArrQuestionAndAnswer() {
  const resultArr = [];
  for (let i = 0; i !== rounds; i += 1) {
    const step = randomNum(10, 30);
    const quantityNum = randomNum(5, 10);
    const firstNum = randomNum(1, 1000);
    const indexSecretNum = randomNum(4, quantityNum - 1);
    const progression = getProgression(firstNum, quantityNum, step);

    const answer = progression[indexSecretNum];
    progression[indexSecretNum] = '..';
    const getJoinArr = progression.join(' ');
    resultArr.push([getJoinArr, String(answer)]);
  }
  return resultArr;
}

export default function brainProgression() {
  engine(condition, getArrQuestionAndAnswer());
}
