//JS does not use list by default it uses array

//Empty array
myArray = [];

day_array = ["Monday", "Tuesday",
            "Wednesday", "Thursday", 
            "Friday", "Saturday", "Sunday"];

//Accessing array items            
console.log(day_array[2]);

//Arrays are iterable
for (i=0; i<day_array.length; i++){
    console.log(i)  //Returns the array index
    console.log(day_array[i])   //To get the item
}

day_array.push("Crazyday"); //Adds a last item
console.log(day_array);

day_array.pop();     //Removes last item
console.log(day_array);

day_array.shift();  //Removes first item
console.log(day_array);  

