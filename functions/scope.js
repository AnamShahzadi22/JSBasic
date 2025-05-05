//scope 
//let var const
//if not declare any var const let then auto considr it var 
//outside fn global scope 
//not work with block scope
//{} it  is scope of if else fn loop etc 
//{} its object literial its differ
// rule: global varible access inside block but block not access outside block
//if else scope
if(true){
    //declare in if else but var used after it 
let a = 10;
const b = 20;
var c = 30;

}
//its not acccessible outside the block scope
//console.log(a);
//var accessible after scope its problem with var
// if we used var  on same variable before or  within the block its override
//var not consider block scope 
//inner and outer value differ of let const case not confuson
console.log(c);
//scope seperate in browser and node both 

//nested scope 
//closures  DOm learn for it best approach
//block with block is nested block


function one(){
    const username = "anam";
    function two(){
        const website = 'abc'

        //inner take value from outer baby take icecream from elder 
    //outer  not take from inner 
    //outer is global for inner 
    //its also closure.
        console.log(username);

    }
    //not accessible errro 

 //   console.log(website);
    //excute two after twowithin one 
    //line by line exectiont if above erro this not execute
    //if we want inner fn execution then must call it 
    two();
    


}

one();



//if else block scope example
if(true){
    const username = 'abc';
    if(username == 'abc'){
        const website = 'hh';
        //this executed because inner access outer
        console.log(username+website);
        
    }
//error outer not access inner 
   // console.log(website);
    
}
//also errro because this accessible with if block 
//console.log(username);


// +++++ interesting example
//this run before the line of fn defination
console.log(addone(5));
function addone(num){
    return num+1;
}
addone(5);
//fn expression with assign nd defination
//its like variable
//this not run before the fn expression
//not accessible here 
//addTwo(4);
//not access before this exection
const addTwo = function(num2){
    return num2+2;
}
addTwo(4);
//hoisting concept how delcare fn and  how treat fn and variable js 
// execution context created in hoisitong