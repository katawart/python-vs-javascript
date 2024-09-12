//For Loop are frequently used as counting loops running from a starting value to a maximum value.

//In JS we set a couning loop using an incrementing number

for (i = 0; i < 10; i++){   //counter set to 0; counter < 10; add 1 to counter
    console.log(i);
}
    
// i is often used to mean index or item
// It can be named whatever you want.  
let hat = 10; //Maximum number

for (cat=0; cat < hat; cat++){
    console.log(`${cat} cat`);
}

// //Loops are often used for iterating over data structures
my_array = ["Hello", "World", "Cookie"];

// //Loops for this purpose are often known as a for each loop
// //For each item in a list, it loops over
my_array.forEach(
    element => {
    console.log(element);
});

//Loops are used in sorting algorithms
for (i = 0; i < my_array.length; i++){
    for (j = 0; j < my_array.length-1; j++){
        //If the value at index 1 is greater than the value at index j
        if (my_array[j] > my_array[j+1]){

            //Swap them over
            let temp = my_array[j];
            my_array[j] = my_array[j+1];
            my_array[j+1] = temp;
        }
    }    
}

console.log(my_array);

