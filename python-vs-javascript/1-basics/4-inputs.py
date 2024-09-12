#In Python to get an input use input()

#Gets a response and stores it
response = input("Type something")

#You can then output or perform operations on it
print(response)

#The data type of an input is always a string
inputNum = input("Type a number: ")

print(type(inputNum))

#If you want to change an input into another data type you must use conversions
#This can be done either afterwards
inputNum = int(inputNum)
print(type(inputNum))

#Or while creating an input, the issue with this approach is that if someone types the wrong data type the program may crash
newNum = int(input("Type a number: "))
print(type(newNum))