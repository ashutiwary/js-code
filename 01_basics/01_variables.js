const accountID = 12345
let accountEmail = "test@test.com"
var accountPass = "pass"
accountcity = "Delhi"
let accountState


// accountId = 22  //Changes not allowed after declare as const

accountEmail = "ac@ac.com"
accountPass = "123"
accountcity = "Jaipur"

/*
Prefer not to use Var
because of issue in block scope and functional scope

*/
console.table([accountEmail,accountPass,accountcity,accountState])
console.log(accountID);