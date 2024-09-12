//Casting is setting the datatype of a variable
let newInt = Number(10);
console.log(newInt);

//Conversion is when you change the data type
while (newInt > 0){
    console.log(String(newInt) + " green bottles");  //Conversion
    newInt--;
}

//Type casting does not prevent type mutability
newInt = "Hello";
console.log(newInt);

//The process of string conversions is to prevent data type errors 
//The below example creates addtion
let numberString = '10';
numberString = Number(numberString) + 2
console.log(numberString);
