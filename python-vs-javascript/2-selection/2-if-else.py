#If, elif, else checking input
response = input("Type Y(es), N(o), or A(bort)")
response = response.lower()

if response == 'y':
    print("That was a good choice")
    
elif response == 'n':
    print("That was a bad choice")

elif response == 'a':
    print("That's a bad plan") 
    
else:
    print("Were you listening to the question as written?")
