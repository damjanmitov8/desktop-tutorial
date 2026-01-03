// Homework #6
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let fristName = ['Damjan', 'Martin', 'Stefan', 'Boban']
let lastName = ['Mladenovski', 'Stojanovski', 'Mitov', 'Krstevski']

function fullName(arr1 , arr2){
    let fullName1 = []
    for(let i = 0; i < arr1.length; i++){
        let student = `${i + 1}.${arr1[i]} ${arr2[i]}`
        fullName1.push(student)
    }
    return fullName1
}
console.log(fullName(fristName, lastName))