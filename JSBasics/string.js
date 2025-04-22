//use string in modern style syntax
//used single double quoto
const name = "Anam";
const repoCount = 50
//concatinate outdated 
console.log(name +repoCount+" Value")
//use  bacticks for concatinate
//  modern way string interpolation ${name ofvar}
//on board changing 
console.log(`Hello My name is ${name} and my repo count is ${repoCount}`)

//string declartion new method used js objects
const gameName = new String('anam-Zahhid')
//now access with key at index because behave like obj 
//access value at index
console.log(gameName[0]);
//also access prototype with this declartion
console.log(gameName.__proto__);
//access length also 
console.log(gameName.length);
//method of proto but used it direct 
console.log(gameName.toUpperCase());
//character positon  on which postion which char  show char 
console.log(gameName.charAt(2));
//index of character 
console.log(gameName.indexOf('m'));
//how string break and sentize 
//substring   of string 
const newString = gameName.substring(0,4) //start and end number
console.log(newString);
//slice string give negative value also   
//in negative value start from reverse 
const sliceString = gameName.slice(-8.4)
console.log(sliceString);
//spaces  remove these  start and end spaces used trim string fun
const trimString = "  aanmm  ";
console.log(trimString);
console.log(trimString.trim());

//replace   string 
const url = "https//  kdkdkd"; //broser not understand places auto % on space
console.log(url.replace('kd', '_'))
//check these text include or not 
console.log( url.includes('kd'))

//split split string based on space  seperator and limit
console.log(gameName.split('_'));




