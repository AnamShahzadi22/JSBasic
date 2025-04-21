console.log("Anam");
///variables and their types 
///not changeable
const accountId = 144557;
///changeable
///Prefer not to use var isue in block scope and functional scope
let accountEmail = "anam@gmail.com";
var accountPassword ="12345";
//not recomended
accountCity = "abc";
accountEmail = "abc";
accountPassword = "4444";
///i dont know value of  this  its predefinded undefined not initlized mean undefine
let accountState;
//not recomended
accountCity = "bbc"
//accountId = 2  not allowed
console.log(accountId);
//another method to print all variables table structure of printing
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
