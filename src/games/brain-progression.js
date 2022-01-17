import { engine, rounds } from '../index.js';
import randomNum from '../functions.js';

const condition = 'What number is missing in the progression?';

function getProgression(start, quantity) {
  const step = randomNum(10, 30);
  const progression = [start];
  for (let i = quantity; i !== 0; i -= 1) {
    progression.push(progression[progression.length - 1] + step);
  }
  return progression;
}

function getArrQuestionAndAnswer() {
  const resultArr = [];
  for (let i = 0; i !== rounds; i += 1) {
    const quantityNum = randomNum(5, 10);
    const firstNum = randomNum(1, 1000);
    const indexSecretNum = randomNum(5, quantityNum);
    const progression = getProgression(firstNum, quantityNum);

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
