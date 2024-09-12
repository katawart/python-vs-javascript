

destinations = ["Manchester", "Cardiff", "the toilet", "Liverpool"]
starts = ["Rhyl", "New York", "the bath"]
names = ["Richard", "Stig", "Tom", "Vinny"]
feelings = ["scared", "hungover", "somebody's leg"]

//Preconditions: Take the name of a person taking a little trip
//Postconditions: None
function takeATrip(name, start, destination, feeling){
    console.log(
    `${name} was in serious trouble, he started off in ${start}.
    Now he didn't know where he was.`)
    setTimeout(a=>{ //Arrow function
    console.log(`${name} felt ${feeling}, it was not a good feeling.`)} //Is what you want JS to do once the time runs out.
        ,4000 //How many ms
        )
    setTimeout(a=>{
    console.log(
        `As they began to take in their surroundings it was obvious they were in the worst place imaginable
        -- ${destination} --`)},8000)
    }
//To use random nubers in JS you don't import Math, but you do have declare you are using it.
takeATrip(
    names[Math.floor(Math.random()*names.length)],  
            starts[Math.floor(Math.random()*starts.length)],

            destinations[Math.floor(Math.random()*destinations.length)],

            feelings[Math.floor(Math.random()*feelings.length)])