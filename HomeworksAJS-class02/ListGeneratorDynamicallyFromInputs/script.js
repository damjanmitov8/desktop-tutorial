// List Generator dynamically from inputs
// Create 3 inputs:
// Color
// FontSize
// Items
// Create a button for generating unordered lists
// When the button is clicked generate a new ul element with the color, font size, and items from the inputs
// Items should be added separated by "," in the input

let color = document.getElementById('color')
let fontSize = document.getElementById('font')
let items = document.getElementById('items')
let btn = document.getElementById('btn')
let div = document.getElementsByTagName('div')[0]

btn.addEventListener('click', function(){
    let ul = document.createElement('ul')
    ul.style.color = color.value
    ul.style.fontSize = fontSize.value + 'px'
    let itemsArr = items.value.split(',')
    for(let item of itemsArr){
        let li = document.createElement('li')
        li.textContent = item
        ul.appendChild(li)
    }
    div.innerHTML = ''
    div.appendChild(ul)
})  