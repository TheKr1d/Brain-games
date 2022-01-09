#!/usr/bin/env node
import _ from 'lodash';
import {
  engine, getArrDiv,
} from '../src/games/index.js';

const condition = 'Find the greatest common divisor of given numbers.';

function getArrQuestionAndAnswer() {
  const result = [];

  for (let i = 0; i !== 3; i += 1) {
    let randomQuestion1 = '';
    let randomQuestion2 = '';
    randomQuestion1 = _.random(2, 20);
    randomQuestion2 = _.random(2, 20);
    const getQuestion = `${randomQuestion1} ${randomQuestion2}`;
    const getIntersections = _.intersection(getArrDiv(randomQuestion1), getArrDiv(randomQuestion2));
    result.push([getQuestion, getIntersections[getIntersections.length - 1]]);
  }
  return result;
}
engine(condition, getArrQuestionAndAnswer());
