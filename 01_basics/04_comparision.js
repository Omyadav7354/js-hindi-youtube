// console.log(2>1);  //true
// console.log(2>=1); //true
// console.log(2<1);  //false
// console.log(2==1); //false
// console.log(2!=1); //true

console.log("2" > 1); //true
console.log("02" > 1); //true


console.log(null > 0); // false
console.log(null ==0); // false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false


// Note :- if there are different data type in comparision in java script 
// not fount predictable amswer, so keep in mind to use same data type for comparision

// ********* Strict Check (===) *********

// Note:- Strict Check Operator first check data type then run operation

console.log("2" === 2);