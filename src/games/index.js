import readlineSync from 'readline-sync';

const engine = (condition, quest) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    let name = userName;
    console.log(condition);
    let i = 3;
    let resultUser = 0;

    for (const item of quest) {
        console.log(`Question: ${item[0]}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer !== String(item[1])) {
            return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${item[1]}"\nLet's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
}
export default engine;