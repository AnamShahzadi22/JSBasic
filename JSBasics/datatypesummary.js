//data types
//how store in memory and how access it 
//null mean empty 
//primitive =>  7 types  NNSSBBU => call by value not give 
//  original reference give it copy and all changes done in copy 
//JS is dynamic  type language 
const score = 100;//number
const scoreValue = 100.3; //number
const isLoggedIn = false;//bool
const outsideTemp = null;//null
let userEmail = "amkkdk";//string
let userAddress;  //undefined
let userId =Symbol('123'); // Symbol normally used in react
let anotherId = Symbol('123')
//both value are same but with symbol not return same it provide unique value 
console.log(userId == anotherId); //return value not same 
const bigNumber = 344493939393939393939n; //big int



//nom primtive return type is object 
//non primitve/Reference Type  =>  Object ,Array,Functions  (Direct give Reference of Memory not copy )
//objects and browser events are most imp in js 
//Arrays
const heros = ["abc","ddj","ddd"

]
//Object in key value pair in curly braces 
//in obj data type is any number string or another object bool,fun etc 
 let myObj = {
    name: "Anam",
    age : 22
     
}

//Functions Declration as var  mean Function Expression 
const myFunction = function(){
    console.log("Hello Word");
    
}
console.log(typeof(myFunction)); //function /function obj




