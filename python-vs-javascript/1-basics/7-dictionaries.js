//Dictionaries are a data structure that uses a key: value structure.
let dictObj = {fname:"Richard",lname:"Hunt", age:40, gender:"M"};

//You access an element by calling the key.
console.log(dictObj.lname);

//To print to the console the keys.
for (var key in dictObj){
    console.log(key);
}

//To get the values we need to used a slightly different approach.
for (var key in dictObj){
    console.log(dictObj[key]);
}