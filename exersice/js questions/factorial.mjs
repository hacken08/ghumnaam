import read from 'readline-sync'


console.log("\n====This program calculate factorial of given number=====")
const number = read.question("Enter your number: ");
let factorials = [];
let answer = 1;

for (let a = number; a > 0; a--) {
    // answer *= a;
    factorials.push(a);
}

answer = factorials.reduce((value1, value2) => value1*value2)
console.log(answer)