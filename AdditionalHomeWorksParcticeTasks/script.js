// Requirements
// Ask the user to enter their age using prompt().

// Convert the input to a number using parseInt().

// Check:

// If the age is less than 13, display: "You are a child."
// If the age is between 13 and 17, display: "You are a teenager."
// If the age is 18 or older, display: "You are an adult."
// Display the message using string concatenation.

// ⭐ Bonus (Invalid Input Handling)
// If the user enters a value that is not a number or a negative number, display: "Please enter a valid age."


let input = prompt('Vnesi godina')
let parsedInput = parseInt(input)

if(Number.isNaN(parsedInput)){
    console.log('Please enter valid age')
}else if(parsedInput <= 0) {
    console.log('Please enter valid age')
}else if(parsedInput < 13){
    console.log('You are a chilid')
}else if(parsedInput <=17){
    console.log('You are a teenager')
}else if(parsedInput >= 18) {
    console.log('You are an adult')
}