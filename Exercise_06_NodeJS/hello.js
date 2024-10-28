console.log('Hello, World!');

const a = 5;
const b = 10;
console.log('The sum is: ' + (a + b));

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    readline.close();
});