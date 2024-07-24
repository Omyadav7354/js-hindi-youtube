// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object output dono k same hi rahenge

tinderUser.id = "123abc"
tinderUser.name = "Op"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "om@gmail.com",
    fullname: {
        userfullname: {
            firstname: "OmPrakash",
            lastname: "Yadav"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = (Object.assign({}, obj1, obj2)) //empty paranthisis is optonal
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "op@gmail.com"
    },
    {
        id: 1,
        email: "op@gmail.com"
    },
    {
        id: 1,
        email: "op@gmail.com"
    },    {
        id: 1,
        email: "op@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// console.log(tinderUser.hasOwnProperty('isLogged')); // false

const course = {
    course: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course // : for alias

console.log(instructor);

//************ API ***********

// {
//     "name": "OmPrakash",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// [
//     {},
//     {},
//     {}
// ]