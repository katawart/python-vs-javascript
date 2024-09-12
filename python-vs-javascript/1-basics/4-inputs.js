//In JS to get an input use prompt()

//Gets a response and stores it
let response = prompt("Type something");

//You can then output or perform operations on it
console.log(response);

//The data type of an input is always a string
let inputNum = prompt("Type a number: ");

console.log(typeof(inputNum));

//If you want to change an input into another data type you must use conversions
//This can be done either afterwards
inputNum = Number(inputNum);
console.log(typeof(inputNum));

//Or while creating an input, the issue with this approach is that if someone types the wrong data type the program may crash
newNum = Number(prompt("Type a number: "));
console.log(typeof(newNum));
