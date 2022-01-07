import readlineSync from 'readline-sync';

const checkAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const name = userName;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let indexFinished = 0;
  let saveRandomNum = 0;
  let rightAnswer = '';

  while (indexFinished !== 3) {
    saveRandomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${saveRandomNum}`);
    const answer = readlineSync.question('Your answer: ');
    rightAnswer = checkAnswer(saveRandomNum);
    if (saveRandomNum % 2 === 0 && answer === 'yes') {
      indexFinished += 1;
      console.log('Correct!');
    } else if (saveRandomNum % 2 !== 0 && answer === 'no') {
      indexFinished += 1;
      console.log('Correct!');
    } else {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}"\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default brainEven;
