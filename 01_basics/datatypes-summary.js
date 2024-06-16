// Primitive

//  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const value = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

// console.log(Id === anotherId);

// Reference (Non-primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]; //Array

let myObj = {
    name: "Ashu", //Object
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}
 
// types of non primitive data type are "Object"
console.log(typeof heroes);


// ++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (non-primitive)

let myYoutube = "ashudotcom"

let anotherName = myYoutube
anotherName = "chaiaurcode"

console.log(myYoutube);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hello@google.com"

console.log(userOne.email);
console.log(userTwo.email);



