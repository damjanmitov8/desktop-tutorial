// HOMEWORK #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result

let numbers = [1,2,3,4,5]

function validateNumber(number){
    if(Number.isNaN(number)){
        return false
    }else {
        return true
    }
}


function sumNumbers(num){
    let sum = 0
    for(let number of num)
        if(!validateNumber(number)){
            return 'Error'
        }else{
        sum = sum + number
    }
    return sum 
}
console.log(sumNumbers(numbers))