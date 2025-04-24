//Arrays object 
//Data structure how save data 
// array used it copy op shallow copy share same ref point 
//deep copy not share same reference 
//simple array => element element of differ type in same aray


const myArr = [2,4,2,3,4,7] 
//const myArr = [0,true,"abc",3,4,5] 
//new declaration of array 
const myHeros = ["avc","dd",2]
//with new  also declare aray 
const myArr2 = new Array(1,3,4,5);
//js array are resizeable
console.log(myArr[0]);
console.log(myArr2[2]);

//Array Methods 

//push add end unshift add start
//pop remove end shift remove start


//push(): add value to array  end of array
myArr.push(6)
myArr.push(7)
console.log(myArr);
//pop(): remove value from array  end of array
myArr.pop()
console.log(myArr);
//unshift() add value at start of array 
//shift all values to right 
myArr.unshift(6)
console.log(myArr);
//push(): remove value from start array 
myArr.shift()
console.log(myArr);
//some method used as question like true false ans
//include result is boolean  data type 
//with include check this number include in array or not 
console.log(myArr.includes(1));

//index of search that value if that exist shown index of it  otherwise -1 
//indexOf  if index not exist then result -1 
//if  value exist shown  index of that value   
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(2));
console.log(myArr);

 
//join  method  add all emlement of array  into string 
//seperator by specified operator e.g ,
const newArray  = myArr.join()
console.log(myArr); //obj type
console.log(newArray);//string type

//slice and splice method 
//slice method 
console.log("Before SLice", myArr);
const myn1 = myArr.slice(2,5) //from index 2 to 5 end not included
console.log("Slice array: ", myn1);
console.log("After Slice", myArr);

//splice Method  the range portion cut off 
//splice manipulate original array slice donot 
const sarray = [2,3,4,5,6,8,9]
console.log("Before Splice", sarray);
//second parameter shown how many number remove from start parameter index
//optionally add more items  in splice where delte or at start index to so on 
const myn2 = sarray.splice(2,3);
console.log("Splice Array", myn2);
console.log("After Splice", sarray);























