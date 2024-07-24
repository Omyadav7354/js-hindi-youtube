// singleton 
// Object.create 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Omprakash",
    "full name": "Omprakash Yadav",
    [mySym]: "mykey1",
    age: 22,
    location: "Indore",
    email: "opy@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// or
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // some cases we need to do this method
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "opy@chatgpt.com" // for change
// console.log(JsUser.email);
// Object.freeze(JsUser) // for lock changes 
JsUser.email = "opy@microsoft.com" // not working after freeze
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



