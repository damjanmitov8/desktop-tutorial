// List generator from an array
// Create an array of 5 names
// Create an HTML page with:
// A header
// An empty unordered list
// A button
// When the button is clicked it should fill in the empty unordered list with the names of the array

let names = ['Damjan','Marko','Daniel','Goran','Matej']

let btn = document.getElementById('btn')
let list = document.getElementById('list')
btn.addEventListener('click', function(){
    for(let name of names){
        let li = document.createElement('li')
        li.textContent = name
        list.appendChild(li)
    }
})