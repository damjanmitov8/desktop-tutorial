//     BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

let recipe = prompt('Enter the name of the recept')
let numOfingredeints = parseInt(prompt('How many ingredients do we need for the recipe'))

let ingredients = []
for(let i = 0; i < numOfingredeints; i++){
    let ingred = prompt('Enter ingredients')
    ingredients.push(ingred)
}
let title = document.getElementById('title')
let list = document.getElementById('list')

for(let ing of ingredients){
    list.innerHTML += `<li>${ing}</li>`
}
title.innerText = recipe