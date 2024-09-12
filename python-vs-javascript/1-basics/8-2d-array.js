let myArray  = [
                ["Alex", "Smith",20],
                ["Jim", "Jones", 15],
                ["Jenny", "Doe",20],
                ["Ali", "Ahmed", 19]];


//Double loop, first loop iterates over the array
//Second loop, iterates over sub arrays, outputs the value of each index to the screen.
for (i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
    for (j = 0; j < myArray[i].length; j++){
        console.log(j);
    }
}