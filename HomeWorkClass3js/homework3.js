// HOMEWORK Part 3
// It is recommended to use AI tools for this task.

// Write a JavaScript function for an ATM:
// ATM should give cash
// Return "Not enough money" if requested more than balance
// Return amount withdrawn and money left if enough
// Hardcode your account money in the program
// Bonus: Make it work with prompt()!


let input = prompt('Witdrawn')
let parsedInt = parseInt(input)
function atm(amount){
    let balance = 500
    let remaining = balance - amount
    if(amount <= balance){
        return `Amount withdrawn ${amount} and your balance is ${remaining}`
    }else if(amount > balance){
        return 'Not enough money'
    }
}
let result = atm(parsedInt)
console.log(result)