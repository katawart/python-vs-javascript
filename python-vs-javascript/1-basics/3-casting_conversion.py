#Casting is setting the datatype of a variable
new_int = int(10)
print(new_int)

#Conversion is when you change the data type
while new_int > 0:
    print(str(new_int) + " green bottles") #Conversion
    new_int -= 1


#Type casting does not prevent type mutability
new_int = "Hello"
print(new_int)

#The process of string conversions is to prevent data type errors 
#The below example creates addition
number_string = '10'
number_string = int(number_string) + 2
print(number_string)