// Ask the user to enter two numbers.
// Ask the user to choose an operation (+, -, *, /).
// Perform the chosen operation using control structures.
// Display the result using concatenation, for example: "5 + 3 = 8"
// ⭐ Bonus (Invalid Input Handling)
// If the user enters an invalid operation, display: "Invalid operation selected."
// If the user tries to divide by zero, display: "Division by zero is not allowed."

let fristNumber = prompt('Enter frist number')
let secondNumber = prompt ('Enter second number')
let chooseOperator = prompt('Choose operator: +, -, *, /')
let parsedFristNum = parseInt(fristNumber)
let parsedSecondNum = parseInt(secondNumber)

function simpleCalculator(num1 , num2 , operator){
    let result = 0
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/'){
        return 'Invalid operator is selected'
    }if (operator === '/' && num2 === 0){
        return 'Division by zero is not allowed'
    }if (Number.isNaN(num1) || Number.isNaN(num2)){
        return 'Enter only numbers'
    }switch(operator){
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        default:
            result -Infinity
            break;
    }
    return `${num1}${operator}${num2}=${result}`
}

let number = simpleCalculator(parsedFristNum,parsedSecondNum,chooseOperator)
console.log(number)
