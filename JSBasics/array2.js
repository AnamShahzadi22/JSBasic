//Complex Array Method 
const marvel_heros = ["thor","spiderMan","IronMan"]
const dc_heros = ["superman","flash","Ironabc"]
console.log(marvel_heros);
//array within array not merge this is not true push of array to another array
//aray take differ type data  
//not good way  
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);


//limitation add one value to another concat one array to other
//used concat better way to add two array 
//add two array and result new array 
 const array = marvel_heros.concat(dc_heros);
console.log(array);


//unlimited array spread 
//spread operator spread the arrays of both element
//each element individual with spread (Preferable )
//glass spread 
//... these 3 dot are spread op  
const all_new_heros  = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

// rare case situation handle 
//flat return all sub array to one array concating 
const anotherArray = [1,2,3,[4,5,6], 7,[6,7,[ 4,5]]];
//in flat write depth infinity mean all element of arrays 
const real_another_array = anotherArray. flat(Infinity);
console.log(real_another_array);


//used in scrapping normally 
//isArray check data is array
console.log(Array.isArray("Anam")); //not array false
//convert to array 
console.log(Array.from("Anam")); //convert any thing to array with from
console.log(Array.from({name: "Anam"})); //not convert it directly its empty but used key approach for  converting to array 


//Array of convert into array from any other variable 
//set of element array variable etc 
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));







