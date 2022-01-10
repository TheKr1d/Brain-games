import _ from 'lodash';

export const getStringFromArrey = (arr) => {
  const arrString = String(arr).split(' ');
  switch (arrString[1]) {
    case '-':
      return Number(arrString[0]) - Number(arrString[2]);
    case '*':
      return Number(arrString[0]) * Number(arrString[2]);
    case '+':
      return Number(arrString[0]) + Number(arrString[2]);
    default:
      break;
  }
  return null;
};

const operators = ['+', '-', '*'];
export const randomOperator = () => operators[_.random(2)];

export const getArrDiv = (num) => {
  let i = 1;
  const result = [];

  while (i <= num) {
    if (num % i === 0) {
      result.push(i);
      i += 1;
    } else {
      i += 1;
    }
  }
  return result;
};

export const getPrimeNum = (num) => {
  let flug = 'yes';

  for (let i = 2; num > i; i += 1) {
    if (num % i === 0) {
      flug = 'no';
      break;
    }
  }
  return flug;
};
