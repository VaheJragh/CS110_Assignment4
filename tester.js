
const factorial = require('./Problem2_1.js').factorial;
const GCD = require('./Problem2_2.js').GCD;
const LCM = require('./Problem2_3.js').LCM;
const hex = require('./Problem2_4').HEX;

let num = 8;
const result = factorial(num);
console.log(num + "! = " + result);

let num1 = 144;
let num2 = 64;
console.log("gcd of " + num1 + " and " + num2 + " is " + GCD(num1, num2));
console.log("lcm of " + num1 + " and " + num2 + " is " + LCM(num1, num2));

let number = 126;
let result1 = hex(number);
console.log(result1);
