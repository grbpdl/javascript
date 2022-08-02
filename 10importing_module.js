/*This involves exporting parts of a file for use in one or more other files,
and importing the parts you need, where you need them.
In order to take advantage of this functionality,
you need to create a script in your HTML document with a type of module. 
Here’s an example:

<script type="module" src="filename.js"></script> */
//a single function can be exported as
// const add = (x, y) => {
//     return x + y;
// }
// export { add };


//this add function can imported in other program as
// import { add, subtract } from './math_functions.js'
/*Here, import will find add in math_functions.js, import
just that function for you to use, and ignore the rest. 
The ./ tells the import to look for the math_functions.js file
in the same folder as the current file. The relative file path (./) 
and file extension (.js) are required when using import in this way. */


// to import all contents of a file
//   import * as myMathModule from "./math_functions.js";
