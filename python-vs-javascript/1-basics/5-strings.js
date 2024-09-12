//Strings are an array of characters
let myString = "Hello World!";

//Strings are iterable
for (i=0; i < myString.length;i++){
    console.log(myString[i]);
}

//You can use single quotes
let newString = 'I love ';
let drink = prompt('What\'s your favourite drink?');


//There are different ways to concatenate strings
//+ concatenates without a space
console.log(newString + " " + drink);

//, concatenates with a space
console.log(newString,drink);

//${} is used to simplify variable and string concatenation. Notice that you use ` not '
console.log(`I heard you like ${drink}. ${newString} ${drink} too.`);

//Multiline is possible too

console.log(`
            I'm a 
            multiline string.`);

//String can be sliced
console.log(newString.slice(2,4)) ;