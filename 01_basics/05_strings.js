const name = "omprakash"
const repoCount = 50

// console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // `` this is backtic symbol placed in top of the tab space


const gameName = new String("omprakash-y-j")
/*
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s')); */
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   omprakash   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://omprakash.com/omprakash%73yadav"

console.log(url.replace('%73', '-'));

console.log(url.includes('omprakash')); // find- true
console.log(url.includes('omprakashYdav')); // false

console.log(gameName.split('-'));