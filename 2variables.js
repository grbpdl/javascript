// variables are declared using var,let or const
var a =5;
var b; // b is first undefined
b=a;
var string="stringvariable";
let c=4; //variable declared using let (c) can only be declared once
// let c=1;//throws error
const d=2;//d cannot be changed
const arr=[1,2,3];
arr[0]=5;//const can also be changed this way
console.log(arr);
//to make object immutanble we use freeze function of javascript
Object.freeze(arr);