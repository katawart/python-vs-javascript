# For Loop are frequently used as counting loops running from a starting value to a maximum value.

# In Python we set a counting loop using a range. 

for i in range(10): #A range with only one value assumes starting from 0
    print(i)
    

# i is often used to mean index or item
# It can be named whatever you want.
hat = range(10) #Maximum number

for cat in hat:
    print(f"{cat} cat")
    
    
#Loops are often used for iterating over data structures
my_list = ["Hello", "World", "Cookie"]

# Loops for this purpose are often known as a for each loop
# For each item in a list, it loops over
for i in my_list:
    print(i)
    

    
#Loops are used in sorting algorithms
for i in my_list:
    for j in range(len(my_list)-1):
        #If the value at index 1 is greater than the value at index j
        if my_list[j] > my_list[j+1]:
            
            #Swap them over
            my_list[j], my_list[j+1] = my_list[j+1], my_list[j]
            
                      




print(my_list)