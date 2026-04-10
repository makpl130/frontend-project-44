import readlineSync from 'readline-sync';

const getAnswer = (question) => {
    const userAnswer = readlineSync.question(`${question} `);
    return userAnswer;
}

export {getAnswer}