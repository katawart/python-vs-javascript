results = [10, 30, 1, 9];


function simpleSort(startarray){

    //Loop over the array from index 0
    for (i = 0; i < startarray.length; i++){

        //Loop over the array from inex 0
        for (j = 0; j < startarray.length - 1; j++){

            //If the value at index 1 is greater than the value at index j
            if (startarray[j] > startarray[j+1]){

                //Swap them over
                let temp = startarray[j]
                startarray[j] = startarray[j+1];
                startarray[j+1] = temp;
            }
        }
    }
    return startarray;
}
console.log(simpleSort(results));