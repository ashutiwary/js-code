// var c = 300
let a = 200
if(true){
    let a =10
    const b = 20
    // console.log(`Inner ${a}`);
}

// console.log(a);


function one(){
    const username = "Ashu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    
    // console.log(website);  //it create error

    two()

}

// one()


if(true){
    const username ="Ashu"
    if(username === "Ashu"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++      Interesting        +++++++++++++++++++

function addone(num){
    return num + 1
}
addone(5)

const addtwo = function(num){
    return num + 2
}
addtwo(5)