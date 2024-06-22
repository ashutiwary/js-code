// Singleton
// Object.create

// Object Literals
const mySym = Symbol("key1")



const JsUser ={
    name : "Ashu",
    "full name": "Ashu Tiwa",
    [mySym]: "myKey1",
    age: 20,
    location: "Varanasi",
    email: "ashu@google.com",
    isLoggedIn: false,
    lastloginDays: ["Monday","Tuesday","Wednesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "ashu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ashu@micro.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


