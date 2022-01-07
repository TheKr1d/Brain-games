#!/usr/bin/env node
import {
  engine, getStringFromArrey, randomNumber, rendomOperator,
} from '../src/games/index.js';

const condition = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  let i = 0;
  const resultArr = [];

  while (i !== 3) {
    const arr = [];
    arr.push(`${randomNumber()} ${rendomOperator()} ${randomNumber()}`);
    arr.push(getStringFromArrey(arr[0]));
    resultArr[i] = arr;
    i += 1;
  }
  return resultArr;
};
engine(condition, getQuestionAndAnswer());
