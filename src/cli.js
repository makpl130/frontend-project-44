import readlineSync from 'readline-sync';

const getUserName = (message) => {
    const userName = readlineSync.question(`${message} `);
    return userName;
//    return '';
}

const helloUser = (userName) => {
    console.log(`Hello, ${userName}!`);
}

export {getUserName, helloUser};