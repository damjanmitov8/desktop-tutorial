// Ask the user to enter a score between 0 and 100.

// Convert the input to a number using parseInt().

// Determine the grade:

// 90–100: "A"
// 80–89: "B"
// 70–79: "C"
// 60–69: "D"
// Below 60: "F"
// Display a message like: "Your score is 85 and your grade is B."

// ⭐ Bonus (Invalid Input Handling)
// If the score is less than 0, greater than 100, or not a number, display: "Please enter a valid score between 0 and 100."


let score = prompt('Enter a score between 0 and 100')
let parsedNumber = parseInt(score)

function gradeEvaluator(){
    if(Number.isNaN(parsedNumber) || parsedNumber < 0 || parsedNumber >100){
        return 'Please enter a valid score between 0 and 100'
    }if(parsedNumber <=100 && parsedNumber >=90){
        return 'A'
    }else if(parsedNumber <=89 && parsedNumber >=80){
        return 'B'
    }else if(parsedNumber <=79 && parsedNumber >=70){
        return 'C'
    }else if(parsedNumber <=69 && parsedNumber >=60){
        return 'D'
    }else{ 
        return 'F'
    }
}
let grade = gradeEvaluator()
console.log(`Your score is ${parsedNumber} and your grade is ${grade}`)