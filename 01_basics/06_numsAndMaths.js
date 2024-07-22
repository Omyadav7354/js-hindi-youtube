/*
const score = 400
console.log(score); // 400

const balance = new Number(100)// [Number: 100]
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); // 100.00

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3)); // 124 roundoff karke de diya

const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(3)); //1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

*/

// ++++++++++++++++++++ Maths ++++++++++++++++++++++

//console .log(Math); // print on inspect element to find many values
//console.log(Math.abs(-4)); //4
//console.log(Math.round(4.3));// 4
//console.log(Math.round(4.6));// 5
//console.log(Math.ceil(4.2)); // 5 (ceiling means top value)
//console.log(Math.floor(4.9)); // 4 (floor means lowest value)
//console.log(Math.min(4, 3, 6, 8)); //3
//console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random()); // for random values(b/t 0-1)
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
