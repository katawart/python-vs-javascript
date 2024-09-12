let error = 400;
//JS uses switch, case
switch (error){
    case (400):
        console.log("Bad request");
        break;  //Never forget a break after each case
    
    case (404):
        console.log("Not found");
        break;
    
    case (418):
        console.log("I'm a teapot")
        break;
    
    default:
        console.log("Something's wrong with the internet")
        break;
}