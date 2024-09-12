//While Loops
//While loops operate under the same conditional rules as if statements

//The most basic way to run a while loop is using a Boolean flag

flag = true;

while (flag){  //As a conditional will trigger on a True a falg holding True will auto trigger it.
    flag = false; //This loop will run forever without a way to set a false
}

//To control a while loop its essential to plan how it will terminate.
//While loops are useful for getting a response from a user.

flag = true;

while (flag){
    response = prompt("Please type Y or N");
    
    if (response =='Y' || response == 'N'){
        console.log("Thanks for a valid response");
        flag = false;    //Finsihes the loop
    }
    else{
        console.log("Invalid response");
    }
}

//As with any conditional we can use Boolean logic

let counter = 0;

while (counter < 10){
    console.log(counter);
    count += 1;
}

//Multiple conditions can be used

day = 12;
month = 6;
year = 2023;

while (day < 30 || month < 12 || year < 2100){
    if (day < 30){
        day = day + 1;
    }
    else{
        
        day = 1;
    }
    if (month < 12 && day == 1){
        month = month + 1;
    }
    else if (month == 12 && day == 1){
        month = 1;
    }
    if (year < 2100 && month == 1 && day == 1){
        year = year + 1;
    }
    if (day == 30 && month == 12 && year == 2100){
        flag = false;
    }
    
    console.log(`Day: ${day} : Month ${month} : Year: ${year}`);        
}

