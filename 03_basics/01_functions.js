// Functions

function sayname(){
    console.log("A");
    console.log("s");
    console.log("h");
    console.log("u");
}

// function addtwono(num1, num2){
//     console.log(num1+num2);
// }

function addtwono(num1, num2){
    // let result = num1 + num2;
    // return result

    return num1 + num2
}


const result = addtwono(5,6)
// console.log("Result:",result);


function loginusermsg(username = "Sam"){
    if(username === undefined){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermsg("Ashu"))
console.log(loginusermsg())