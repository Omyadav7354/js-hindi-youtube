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
    /*if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
    */
    // or
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
// console.log(logInUserMessage("omprakash")); // omprakash just login
// console.log(logInUserMessage("")); // just logged in
// console.log(logInUserMessage()); // undefuned just log in


function calculateCartPrice(...num1) {
      return num1
}
//console.log(calculateCartPrice(200, 300, 400, 2000)); // [ 200, 300, 400, 2000 ]

function calculateCartPrice1(val1, val2, ...num2) {
    return num2
}
// console.log(calculateCartPrice1(200, 300, 400, 2000)); // [ 400, 2000 ]

const user = {
    username: "OmPrakash",
    price: 1999
}

function handleObject(anyObject) {
    console.log(`userName is ${anyObject.username} and price is ${anyObject.price}`);  
}

// handleObject(user)
// or You can pass direct object
handleObject({
    username: "Op",
    price: 19999
})

const myNewArray= [200, 400, 600, 100]

function returnSecondValue (getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// or You can pass direct Array

function returnSecondValue (getArray){
    return getArray[1]
}
console.log(returnSecondValue([200, 400, 600, 100]));