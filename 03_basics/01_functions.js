function sayMyName(){
    console.log("O");
console.log("M");
console.log("P");
console.log("R");
console.log("A");
console.log("K");
console.log("S");
console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
    // let result = number1 + number2
    // return result 
    // console.log("Omprakash"); // after return anything would not be run
    // or
    return number1 + number2
}

// addTwoNumbers() // NaN
// addTwoNumbers(3, 4) // 7
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, "a") // 3a
const result = addTwoNumbers(3, 5) 
// console.log("Result: ", result); 

function logInUserMessage(username){
    return `${username} just logged in`
}
// console.log(logInUserMessage("omprakash")); // omprakash just login
console.log(logInUserMessage("")); // just logged in
console.log(logInUserMessage()); // undefuned just log in

