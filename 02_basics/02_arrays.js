const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) // push only merge two array and take array as a element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros =  marvel_heros.concat(dc_heros)// cocat is used merge two array and return a new array
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros] // Spread Operator: its easy merge two or more arrays together
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5,6], 7, [6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Omprakash"));
console.log(Array.from("Omprakash"));
console.log(Array.from({name:"Omprakash"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
