/* console.log("hello")


var array =  ['olle', 89 , "HELLLO WORLD ", false]
 array.pop()
console.log(array)

array.push("ROCK")
console.log(array)

array.shift()
console.log(array)

array.unshift("ROCK")
console.log(array) */



// objects in Javascript // 

/* var person = {
    name: "rahul ",
    age :  22
};

console.log(person.name) */ 


/* var Cap = {
    first_Name : ' Steve ',
    last_Name : ' Rogers ',
    Age : 102,
    friends : ['Tony Stark ', ' Bruce Banner', 'Bucky Barnes'],
 
    address :{
            state :'new york',
            city  : {
                name : 'brooklyn',
                pincode :  ' 121A212'
    }
    }
}

console.log(Cap.friends[1])
console.log(Cap.address.city.name) */


var array =  [12 ,21,4,54,6,57]

for ( var i = 0; i<array.length; i++){
    square = array[i] * array[i]
    console.log(square)
}