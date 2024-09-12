# While Loops
# While loops operate under the same conditional rules as if statements

# The most basic way to run a while loop is using a Boolean flag

flag = True

while flag:  #As a conditional will trigger on a True a falg holding True will auto trigger it.
    flag = False #This loop will run forever without a way to set a false
    
    
# To control a while loop its essential to plan how it will terminate.
# While loops are useful for getting a response from a user.

flag = True

while flag:
    response = input("Please type Y or N")
   
    if response in ['Y', 'N']:
        print("Thanks for a valid response")
        flag = False    #Finsihes the loop
    else:
        print("Invalid response")
        



#As with any conditional we can use Boolean logic

counter = 0

while counter < 10:
    print(counter)
    counter = counter + 1


#Multiple conditions can be used

day = 12
month = 6
year = 2023

while day < 30 or month < 12 or year < 2100:
    if day < 30:
        day = day + 1
    else:
        day = 1
    
    if month < 12 and day == 1:
        month = month + 1
    elif month == 12 and day == 1:
        month = 1

    if year < 2100 and month == 1 and day == 1:
        year = year + 1
    
    if day == 30 and month == 12 and year == 2100:
        flag = False
    
    
    print(f"Day: {day} : Month {month} : Year: {year}")