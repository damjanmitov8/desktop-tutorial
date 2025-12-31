// Write a JavaScript function which accepts a parameter, returns its type, and prints it in the console.

// Call the function 5 times for 5 different types: object, boolean, number, string, undefined

function types(value){
    let type1 = typeof value
    console.log(type1)
    return type1
}

types(1)
types('String')
types({})
types(true)
types()