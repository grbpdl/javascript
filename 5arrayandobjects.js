var arr=["hello",3,4,5];//declearing array with different data types
var myArray = [["John", 23], ["cat", 2]];//multidimensional array
console.log(myArray[1][0]);
arr.push(6);//push one or more element to end of array
console.log(arr);
myArray.pop();//remove elemant from end of array
console.log(myArray);
myArray.unshift("added");//adds element at begening of array
console.log(myArray);
myArray.shift();//removes element from last
console.log(myArray);

//object can be made as
const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};
//they can be ascessed as
nm=cat.name;
lg=cat["legs"];
console.log(nm);
console.log(lg);
//it can be dinamically changed as
cat.name="retriver";
//additional properties can also be added as
cat.colour="black";
console.log(cat);
//propreties can be deleted as
delete cat.tails;
console.log(cat);
cat.hasOwnProperty("name");//check if the object has the property and return boolean

//direct assignment
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // today ans tomorrow variables are assigned respective values from object
  const { today, tomorrow } = HIGH_TEMPERATURES;