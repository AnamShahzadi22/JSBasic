
// fn creatin,memory management fn scope creation, call stack
//close code in pkg and used it simple

//fn defination
function sayMyName(){
    //fn scope stated
    console.log('abc');
}
//fn calling
//sayMyName  refernece existence of fn 
//  and  this is execution
sayMyName();

//add two num fn
//in fn defination parameter

function addTwoNumber(num1,num2){
  //checking done with if else  
    console.log( num1+num2);
 //return something which used to store inanohter va
    return num1+num2;
    //after return nothing work exist from fn
}
  //print nan  if we give no arguments 
  //cling time arguments
addTwoNumber(2,3)
//consider both string and concatinate it by self 
//issue  type issue 
addTwoNumber(3,"4");
//also store its result but if we want to store
//fn must return some things whichis store
const result = addTwoNumber(3,5);
//here undeifne value if no return from fn 
console.log( "Result: ", result);


function loginUserMessage(username = 'sam'){
    //if no given then used defualt value 
    //user loged in which is in parameter
    if(!username){
        console.log('Please enter the user name');
        //exit from code fn
        return;
   
    }
     return `${username} just logged in`
}
//return value save in another var and then print it 
   const res = loginUserMessage('abc');
console.log(res);
//also valid 
console.log(loginUserMessage('anam'));
//if no value pass the then undefine mean nothing pass
console.log(loginUserMessage());



//shopping cart user add items not known how much nmber
//rest op pass value to parameter all items pack to bundle like array here
//if no paramter given rest mean values given to it 
//if one given then remaining rest take with ...
function calculateCartPrice(...items){
    return  items ;
}
console.log(calculateCartPrice(200,400,500,600));
//objects with fn
const user ={
    username: "anam",
    price: 144
}
//how give obj to fn 
//chk type safety with typescript also with js if else used
//if key not in obj then undefined shown like age is undefine
function handleObject(anyObj){
    console.log(`User name is ${anyObj.username} and price is ${anyObj.price}`)

}
handleObject(user);
//same
handleObject({
    username: "sam",
    price:22
})
//we also pass array to fn
const myNewArray = [1,3,4,5,6];
function returnSecondValueAray (getArray){
    return getArray[2];
}
console.log(returnSecondValueAray(myNewArray));
//same
console.log(returnSecondValueAray([3,5,6,7,6]));


