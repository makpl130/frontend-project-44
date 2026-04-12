#!/usr/bin/env node
import welcome from '../src/welcome.js'
import { getUserName, helloUser }  from '../src/cli.js';
import { getAnswer, sendMessage } from '../src/interact.js'

const isEven = (number) => {
  return number % 2 === 0;
}

welcome('Welcome to the Brain Games!');
const userName=getUserName('May I have your name?');
helloUser(userName);
console.log(`Answer "yes" if the number is even, otherwise answer "no"`)

let gameResult='win';
for (let i=0; i<3; i += 1) {
  let boolUserAnswer=''; 
  const randomNumber=Math.floor(Math.random()*100);
  const boolRigthAnswer=isEven(randomNumber);
  const stringAnswer = boolRigthAnswer === true ? "yes" : "no";
  sendMessage(`Question: ${randomNumber}`)
  const userAnswer=getAnswer(`Your answer: `);
  if (userAnswer !== "yes" && userAnswer !== "no") {
    gameResult='fail';
    break;
    };
  if ( userAnswer === 'yes' ) {boolUserAnswer=true;};
  if ( userAnswer === 'no' ) {boolUserAnswer=false;};
  if ( boolRigthAnswer !== boolUserAnswer) {
    sendMessage(`${userAnswer} is wrong answer ;(. Correct answer was ${stringAnswer}`);
    gameResult='fail';
    break };
  sendMessage('Correct!');
};

if ( gameResult === 'win') {
    sendMessage(`Congratulations, ${userName}!`);
    } else {
        sendMessage(`Let's try again, ${userName}!`);
    }






