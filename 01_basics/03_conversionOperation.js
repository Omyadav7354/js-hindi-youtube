
let score = 33


console.log(typeof score); // number
//or
console.log(typeof(score)); //number

let marks = "45"

console.log(typeof marks); // string


let valueInNumber = Number(marks) 
console.log(typeof valueInNumber); // number
console.log(valueInNumber);

// let marks = null // 0 
// let marks = undefined // NaN
// let marks = true // 1
// let marks = op // NaN


let score1 = "3abc"

console.log(typeof score1);//string

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1); //NaN


// "33" => 33
// "22abc" => NaN
// true => 1; false=> 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true; "0"-false; ""-false; "op"-true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber); // string
console.log(stringNumber); //33


// ************************** Operations **************************



let value = 3
let negValue = -value
console.log(negValue); // -3

// console.log(2+2);// 4
// console.log(2-2);// 0
// console.log(2*2);// 4 
// console.log(2**3);// 8
// console.log(2/3);// 0.66666666666666
// console.log(2%3);// 2

let str1 = "hello"
let str2 = " op"

let str3 = str1 + str2
console.log(str3);  // hello op

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32



console.log(+true); // 1
// console.log(true+); // error
console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // code must be easy to understand

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101  & ++gameCounter => 101