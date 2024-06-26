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
// console.log(loginusermsg("Ashhu"));


function calculatecartprice(...num1){
    return num1
}

// console.log(calculatecartprice(200,300));

const user = {
    username: "Ashu",
    price: 199
}

function handleobject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user) 

handleobject({
    username: "sam",
    price:399
})

const mynewarray = [200, 300, 400]

function returnsecondvalue(getarray){
    return getarray[1]
}

// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200, 300, 400]));