//Number   and Math Data Type
 //*****Number Data Tyope*** */

 const score = 400;
 console.log(score); //400
 
 //explicity define data type
 //new  like object   so its output in object
 //define in new object   new define create new obj

 const balance = new  Number(100)
 console.log(balance);  //[Number : 100]
 console.log(typeof balance);
//String property 
 console.log(balance.toString());
 //string have more additonal property 
 console.log(typeof(balance.toString()));
 //length property after string conversion
 console.log(balance.toString().length);

 //toFixed property 
 //if have value after point then shown only two nd if no then show  2 0
  //fixed preccision value  1 2 3 etc 
 console.log(balance.toFixed(2));
 
 // toPrecesion range from 1 to 21
 //priority before decimal 
 //return string 
 //const otherNumber = 23.8966;
 //const otherNumber = 123.8966;
  const otherNumber = 1123.8966; //exponential 



 //precison 3 mean focus on 3 value 
 console.log(otherNumber.toPrecision(3));  23.9
 

 
 // to localstring counting  coma seperation pair
 //usa standard  
 const  hundreds = 1000000;
 console.log(hundreds.toLocaleString());
 //convert to indian standard
 console.log(hundreds.toLocaleString('en-IN'));

 //Max and Min number 
//check the range of number with max min etc 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER)

//++++++++++++++++++++++++++++++++++++++++++++++++=
//Math Data Type Method 

//Math lib by defualt in js 
console.log(Math); //Object in itself
//Math.abs sign change   absolute mean onlu -ve sign change to+ve 
//+ve +ve its sign not change
console.log(Math.abs(-4)); //4

//round   regualr rounding after .
console.log(Math.round(4.6));
console.log(Math.round(4.3));
//control value choose uper and lower
//ceil and floor less used 
console.log(Math.ceil(4.2));  //upper value 5
console.log(Math.floor(4.6)); //lower value 4 


//Math.min find lowest value in array 
//Math.max highest value 
console.log(Math.max(4,2,6,5));  //6
console.log(Math.min(4,2,6,5)); //2

//used of Math library  Math.radom most used
console.log(Math.random()); //random value every time  (bw 0 to 1 )
//between range value  in prob statement //dice 1 to 6 

console.log((Math.random()  * 10) +1);      
//min value 1 not 0 
///+1 avoid 0
//trick  if range define 
const min = 20;
const max =30;
//max - min range define   20 to 30 

console.log(Math.floor((Math.random()  * (max-min+1)+min)));
//Or 

console.log(Math.floor((Math.random()  * (max+1-min)+min)));







