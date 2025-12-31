// Requirements
// Ask the user to enter a number using prompt().

// Convert the input into a number using parseInt().

// Check:

// If the number is positive, negative, or zero.
// If the number is even or odd.
// Display a message using string concatenation, for example: "The number -4 is negative and even."

// ⭐ Bonus (Invalid Input Handling)
// If the user does not enter a valid number, display: "Invalid input. Please enter a number."


let input = prompt('Enter a number')
let parsedInput = parseInt(input)

if(Number.isNaN(parsedInput)){
    console.log('Enter a valid number')
}else{
    if(parsedInput < 0 && parsedInput % 2 === 0){
        console.log(`The number ${parsedInput} is negative and even`)
    }else if(parsedInput >0 && parsedInput % 2 === 0){
        console.log(`The number ${parsedInput} is positive and even`)
    }else if(parsedInput <0 && parsedInput % 2 !== 0){
        console.log(`The number ${parsedInput} is negative and odd`)
    }else if(parsedInput >0 && parsedInput % 2 !== 0){
        console.log(`The number ${parsedInput} is positive and odd`)
    }else if(parsedInput === 0){
        console.log(`The number is ${parsedInput} is zero`)
}
}