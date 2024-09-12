#Dictionaries are a data structure that uses a key: value structure.
dict_obj = {"fname":"Richard","lname":"Hunt", "age":40, "gender":"M"}

#You access an element by calling the key.
print(dict_obj["lname"])

#To print to the console the keys.
for key in dict_obj:
    print(key)


#To get the values we need to used a slightly different approach.
for key, val in dict_obj.items():
    print(val)

