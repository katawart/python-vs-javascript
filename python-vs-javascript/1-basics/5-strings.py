#Strings are an array of characters
my_string = "Hello World!"

#Strings are iterable
for i in my_string:
    print(i)


#You can use single quotes
new_string = 'I love '
drink = input("What's your favourite drink?")


#There are different ways to concatenate strings
#+ concatenates without a space
print(new_string + " " + drink)

#, concatenates with a space
print(new_string,drink)

#{} is used to simplify variable and string concatenation. Notice you need f before '
print(f'I heard you like {drink}. {new_string}{drink} too.')

#Multiline is possible too

print("""
        I'm a
        multiline string.""")

#String can be sliced
print(new_string[2:4])