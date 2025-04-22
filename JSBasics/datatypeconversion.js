//conversion and Operations
// ***************Conversion***********
///Number Conversion 
//let score =33;
///String
//let score = "33"
//if not a number format then mean not
//  convert to number like 123abc it is nan
//let score = "33abc"
//let score = null;
// let score = undefined ;

// ///type of it 
console.log(typeof(score));
// //Or same with fn and without fun:
console.log(typeof score);
// ///conversion to number from string score  
// // capital format for conversion
 let valueInNumber = Number(score);
//  ///undefine nan but its also number 
 console.log(typeof valueInNumber); ///number 
//  ///it is also a special type nan not relay on number is js so checkit must
 console.log(valueInNumber); //Nan

//  ///nan type is number but its not a number


//  ///Boolean Conversion 
//  //0 empty string null undefined also false 
 //let isLoggedIn = 1;
 let isLoggedIn = undefined;
//  ///convert to bool
 let booleanLoggedIn = Boolean(isLoggedIn)
 console.log(typeof booleanLoggedIn);
 console.log(booleanLoggedIn);

//  ///String Conversion
 let someNumber =33;
 let stringNumber = String(someNumber);
 console.log(stringNumber);
 console.log(typeof stringNumber);
 
 
 
 //************Operations **********/
 //Arithematic Operations Logical etc
 //negative value 
 let value = 3;
 let negValue = -value
 console.log(negValue);
//  //Arithematic Operations
 console.log(2+2);
 console.log(2-2);
  console.log(2*2);
   console.log(2/2);
   console.log(2**3);
   console.log(3%2);
//  ///with add we only concatinate string only add not any other operations
let str1 = "hello";
let str2 = " Anam"
let str3 = str1+ str2
console.log(str3);
// ///major problem concatinating with string
// //rule if number add with string it become string in js
console.log("1"+2);
console.log(1+ "2");
// //12 become string they add with last 2 it is also string 
console.log("1"+2+2);
// ///here first number add its 3 then add like string
console.log(1+2+"2");

//tricky  special type conversion 
//with + convesion to number of the statment 
console.log(true);
///output 1
console.log(+true);
console.log(+"");
//Assignment  Operation
let num1,num2,num3
//not recommended 
num1 = num2 = num3 = 2+2
///changes in prefix and post fix  
//post fix value first assingn then increment
//prefix value first increment then assign to other variable
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);







 


 
