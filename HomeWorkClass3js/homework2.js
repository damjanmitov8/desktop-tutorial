// HOMEWORK Part 2
// Write a JavaScript function that:

// Calculates your dog's age (1 human year = 7 dog years)
// Bonus: Make it work for dog to human conversion as well


function calculateAge(age, type) {
    if (type === 'human') {
        return age * 7
    } else if (type === 'dog') {
        return age / 7
    }
}
console.log(calculateAge(3, 'human'))
console.log(calculateAge(14, 'dog'))

