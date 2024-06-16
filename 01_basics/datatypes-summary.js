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



