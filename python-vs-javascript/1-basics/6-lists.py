#Python does not use array by default it uses list

#Empty list
my_list = []    

day_list = ["Monday", "Tuesday",
            "Wednesday", "Thursday", 
            "Friday", "Saturday", "Sunday"]

#Accessing list items
print(day_list[2])

#Lists are iterable
for i in day_list:  
    print(i)                   #Returns the list item
    print(day_list.index(i))   #To get the index  


day_list.append("Crazyday") #Adds a last item
print(day_list)

day_list.pop(len(day_list)-1)    #Removes last item
print(day_list)

day_list.pop(0)    #Removes first item
print(day_list)

