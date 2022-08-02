function functionName() //declaring function
{
    console.log("Hello World");
}
functionName();//callling function

function testFun(param1, param2) //passing aguments to function
{
    console.log(param1+param2);
}
testFun(2,3);
function plusThree(num) 
{
    return num + 3;//returning from function
}
const answer = plusThree(5);
console.log(answer);

//arrow function
const myFunc = () => {
    const myVar = "value";
    return myVar;
  }
//or
// const myFunc = () => "value";
//arrow function with parameters
const doubler = (item) => item * 2;
doubler(4);
//using default parameters in function
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
//to pass any number of arguments to function
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
  console.log(howMany(0, 1, 2));