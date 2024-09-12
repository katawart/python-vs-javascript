#Python ranges.

#Python has a native range object that allows up to generate a range of integers from a starting value to and ending value.

#Creates a range with 10 values starting from 0 and stopping at 10
print(range(10))

#Ranges can have a start and end point.
print(range(1,10))

#When used in a loop the range stops at the range length -1
for i in range(10):
    print(i)  #Prints each element of the range

#Ranges can also have a step
print(range(1,10,2))

#In a loop the range will increment by 2
for i in range(1,10,2):
    print(i)
    
#Finaly a range can be assigned to a variable
new_range = range(1,10)
print(new_range)

#Which means it can be used to control a loop.
for i in new_range:
    print(i)

#Ranges can also be reversed
print(range(-5,0))

#Creating a countdown loop
for i in range(-5,0):
    print(i)

#Ranges can be used in IFs
if 7 in range(1,10):
    print("Found")
    
#The values you can input into a range are parameters, which means you can use any variable to set them
val_one = int(input("Starting number"))
val_two = int(input("End number"))
step = int(input("Step"))

my_range = range(val_one,val_two,step)

for i in my_range:
    print(i)

#You may need to find out if a range contains a specific value
search = int(input("Search for?"))

#This can be achieved using an IF a search value, and a range combined.
if search in my_range:
    print("Found")
else:
    print("Not found")


#
range_one = range(1, 10)
range_two = range(-5,10)

result_list = []

for i in range_one:
    for x in range_two:
        result_list.append(i*x)
        
if 14 in result_list:
    print("Found")