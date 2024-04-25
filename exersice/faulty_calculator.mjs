import read from 'readline-sync'


function probablityCalc() {
    let output = 0;
    output = Math.random() * (100 - 1) + 1;
    return parseInt(output);
}

function userInput() {
    let experssion = read.question("Your epxerssion: ");

    let value1 = parseInt(experssion.split(" ")[0]);
    let value2 = parseInt(experssion.split(" ")[2]);

    if (!isNaN(value1) && !isNaN(value2)) {
        return [value1, experssion.split(" ")[1], value2];
    } else {
        console.log("Invalid expression to perform methamtical operation");
        userInput();
    }
}

function calculate(val1, operation, val2) {

    switch (operation) {
        case "+":
            console.log(val1 + val2)
            break;
        case "-":
            console.log(val1 - val2)
            break;
        case "*":
            console.log(val1 * val2)
            break;
        case "/":
            console.log(val1 / val2)

            break;
        default:
            console.log("Invalid sign of operation, choose correct methamatical sing to perform operation")
            break;
    }
}

function faultyCalculate(val1, operation, val2) {
    switch (operation) {
        case "+":
            console.log(val1 - val2)
            break;
        case "-":
            console.log(val1 / val2)
            break;
        case "*":
            console.log(val1 + val2)
            break;
        case "/":
            console.log(val1 - val2)

            break;
        default:
            console.log("Invalid sign of operation, choose correct methamatical sing to perform operation")
            break;
    }
}

let input = userInput();
let chances = probablityCalc();
console.log(chances > 10, chances);
if (chances > 10) calculate(input[0], input[1], input[2]);
else if (chances <= 10) faultyCalculate(input[0], input[1], input[2]);
