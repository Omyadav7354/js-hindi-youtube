// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myarr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// Array methods

// myArr.push(6) // add 6 value in arr
// myArr.push(7)
// myArr.pop() // for remove last value in array
// console.log(myArr);

// myArr.unshift(9) // for add in starting of the value
// myArr.shift()// for remove first value of array

// console.log(myArr.includes(9)); // boolean result false
// console.log(myArr.indexOf(9)); // -1 dont know that value does exist 
// console.log(myArr.indexOf(3)); // 3 index par
// console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);

// console.log(typeof newArr); // string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);  

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn1);


