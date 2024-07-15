const accountId = 1232
let accountEmail = "omyadav@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;

// accountId = 2 //not allowed bracuse accountId is constant

accountEmail = "opyadav@gmail.com"
accountPassword = "12121"
accountCity = "Ujjain"

console.log(accountId);

/*
Note:- Prefer not to use var because of
issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])