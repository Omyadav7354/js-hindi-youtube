
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