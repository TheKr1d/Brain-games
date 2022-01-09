#!/usr/bin/env node
import _ from 'lodash';
import {
  engine, getPrimeNum,
} from '../src/games/index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getArrQuestionAndAnswer() {
  const resultArr = [];

  for (let i = 0; i !== 3; i += 1) {
    const randomNum = _.random(2, 100);
    const arr = [randomNum, getPrimeNum(randomNum)];
    resultArr.push(arr);
  }
  return resultArr;
}
engine(condition, getArrQuestionAndAnswer());
