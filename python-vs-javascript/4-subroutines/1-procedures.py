import time
import random
destinations = ["Manchester", "Cardiff", "the toilet", "Liverpool"]
starts = ["Rhyl", "New York", "the bath"]

names = ["Richard", "Stig", "Tom", "Vinny","Karl"]

feelings = ["scared", "hungover", "somebody's leg"]

#Preconditions: Take the name of a person taking a little trip
#Postconditions: None
def take_a_trip(name, start, destination, feeling): #arguments, parameters
    print(
    f"""{name} was in serious trouble, he started off in {start}.
    Now he didn't know where he was.""")
    time.sleep(4)
    print(f"{name} felt {feeling}, it was not a good feeling.")
    time.sleep(4)
    print(
        f"""As they began to take in their surroundings it was obvious they were in the worst place imaginable
        -- {destination} --""")

#Activating the sub routine - Call
take_a_trip(
    names[random.randint(0, len(names)-1)],  
    
            starts[random.randint(0, len(starts)-1)],
            
            destinations[random.randint(0, len(destinations)-1)],
            
            feelings[random.randint(0, len(feelings)-1)])

# take_a_trip("Richard", "Liverpool", "Manchester", "Hungry")
