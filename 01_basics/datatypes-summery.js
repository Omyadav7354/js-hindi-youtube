// types of Data types :- mainly difference b/w data types is which way we can store data in memory 
// and which way retrive (access) the data


// 1. Primitive Data type- 
 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 4853454445545432555n


// Reference (Non primitive) data type-

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // array
let myObj = {
    name:"Omprakash",
    age: 22,
}

const myFunction = function(){
console.log("Hello world");
}

console.log(typeof bigNumber);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Premitive), Heap (Non-Primitive)

let myYoutubeName = "OmprakashYadav.com"

let anotherName = myYoutubeName

anotherName = "OpYadav"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

console.log(userOne);

let userTwo = userOne

userTwo = userOne

userTwo.email = "omprakash@google.com"

console.log(userOne);
console.log(userTwo);