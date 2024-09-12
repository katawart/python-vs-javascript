results = [10, 30, 1, 9]


def simple_sort(start_list):

    #Loop over the list form index 0
    for i in range(0,len(start_list)):

        #Loop over the list from index 1
        for j in range(len(start_list)-1):
            #If the value at index i is greater than the value at index j
            if start_list[j] > start_list[j+1]:

                #Swap them over

                start_list[j], start_list[j+1] = start_list[j+1], start_list[j]




    return start_list   #Return sorted list

print(simple_sort(results))



sorted_list = simple_sort([11,2, 7, 1])

print(sorted_list)