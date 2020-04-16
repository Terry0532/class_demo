var math = require("./maths.js");
var operation = process.argv[3];
var num1 = Number(process.argv[2]);
var num2 = Number(process.argv[4]);
console.log(operation)

switch (operation) {
    case "+":
        console.log(math.sum(num1, num2));
        break;
    case "-":
        console.log(math.difference(num1, num2));
        break;
    case "*":
        console.log(math.product(num1, num2));
        break;
    case "/":
        console.log(math.quotient(num1, num2));
        break;
    default:
        break;
}