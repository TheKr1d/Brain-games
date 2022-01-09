#!/usr/bin/env node
import _ from 'lodash';
import {
  engine,
} from '../src/games/index.js';

const condition = 'What number is missing in the progression?';

function getArrQuestionAndAnswer() {
  const resultArr = [];
  for (let i = 0; i !== 3; i += 1) {
    // создание нулевых переменных
    let quantityNum = 0;
    let step = 0;
    let firstNum = 0;
    let secretNum = 0;

    // Объявление рандомных переменных
    quantityNum = _.random(5, 10);
    firstNum = _.random(1, 1000);
    secretNum = _.random(5, quantityNum);
    step = _.random(10, 30);

    const getQuestion = [firstNum];

    for (let i2 = quantityNum; i2 !== 0; i2 -= 1) {
      getQuestion.push(getQuestion[getQuestion.length - 1] + step);
    }
    const answer = getQuestion[secretNum];
    getQuestion[secretNum] = '..';
    const result = [getQuestion, answer];
    resultArr.push(result);
  }
  return resultArr;
}
engine(condition, getArrQuestionAndAnswer());
