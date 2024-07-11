const user = {
    username: "Ashu",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        // console.log(this);
    }
}

// user.welcomemessage()
// user.username = "Sam"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username = "Ashu"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Ashu"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Ashu"
//     console.log(this.username);
// }
// chai()

// const addtwo = (num1,num2) => {
//     return num1+num2;
// }
// const addtwo = (num1,num2) => num1+num2;

// const addtwo = (num1,num2) => (num1+num2);

const addtwo = (num1,num2) => ({username: "ashu"});

console.log(addtwo(3,4));