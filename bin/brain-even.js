#!/usr/bin/env node
import _ from 'lodash';
import {
  engine,
} from '../src/games/index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  let i = 0;
  const resultArr = [];

  while (i !== 3) {
    const item = [_.random(1, 1000)];
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
engine(condition, getQuestionAndAnswer());
