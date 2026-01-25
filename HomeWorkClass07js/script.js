// HOMEWORK Part 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let allParagraphs = document.getElementsByTagName('p')
for(let p of allParagraphs){
    p.textContent = 'Changed Paragraphs'
}
let allHeaders = document.querySelectorAll('h1, h3')
for(let header of allHeaders){
    header.textContent = 'Changed Headers'
}

// HOMEWORK Part 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in the HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let numbers = [2,3,4,5,6]
let list = document.getElementById('list')
let result = document.getElementById('result')
let sum = 0
for(let num of numbers){   
    list.innerHTML += `<li> ${num} </li>` 
    sum = sum + num
} 
let equation = ''
for(let i = 0; i < numbers.length; i++){
    equation += numbers[i]
    if( i !== numbers.length -1){
        equation += ' + '
    }
}
    equation += '=' + sum

    result.textContent = equation


