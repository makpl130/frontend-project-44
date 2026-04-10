#!/usr/bin/env node
import welcome from '../src/welcome.js'
import { getUserName, helloUser }  from '../src/cli.js';
import { getAnswer } from '../src/answer.js'

welcome('Welcome to the Brain Games!');
const userName=getUserName('May I have your name?');
helloUser(userName);


