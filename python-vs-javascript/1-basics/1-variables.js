//In JavaScript we use Camel Case for variables
//myVar, userName...

//Follow the airbnb (Yes, really Air BnB) JS Style Guide
//https://github.com/airbnb/javascript#references

let myVar = "Good Morning";
console.log(myVar);

//In JS variables are mutable

myVar = 6;
console.log(myVar);

//Constants in JS use the const term
const cOne = 2; 
const cTwo = 3;
console.log(cOne + cTwo);
cTwo = cTwo + 1;        //Will cause an error
console.log(cTwo);