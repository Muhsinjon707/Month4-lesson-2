// console.log(Number.MAX_SAFE_INTEGER); // 2^53-1
// console.log(Number.MAX_SAFE_INTEGER + 2); // 2^53+1

let age = 2n;
let weight = 105n;

// console.log(age);
// console.log(weight);

// +, -, *, /, %, **, ++, --

// ** ==> Math.pow(2, 4)
// ++ ==> increment
// -- ==> decrement

let a = 6;
// a++;
// ++a;

// console.log(a++);
// console.log(++a);
// console.log(a);


let b = 7;
b--;
// console.log(b);


let age1 = 5;
let age2 = 6;

let res = age1 != age2;
// console.log(res);

// let agePrompt = +prompt("Enter your age: ");
// if (agePrompt > 18) {
//     document.write("<h1>You're allowed to visit this site</h1>");
// } else {
//     document.write("<h1>You're not allowed to view this site</h1>");
// }

let num1 = +prompt("Enter a number 1: ");
let num2 = +prompt("Enter a number 2: ");
let num3 = +prompt("Enter a number 3: ");

let max;

if (num1 > num2) {
    max = num1;
} else {
    max = num2;
}

if (max < num3) {
    max = num3;
}

console.log(max);

// let letter = `<h1>Max number is ${max}, and min number is ${min}.</h1>`
// document.write(letter);

