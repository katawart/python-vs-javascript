//If, else if, else checking input
let response = prompt("Type Y(es), N(o), or A(bort)");
response = response.toLowerCase();

if (response == 'y'){
    console.log("That was a good choice");
}
else if (response == 'n') {
    console.log("That was a bad choice");
} 
else if  (response == 'a') {
    console.log("That's a bad plan") ;    
} 
else {
    console.log("Were you listening to the question as written?");
}