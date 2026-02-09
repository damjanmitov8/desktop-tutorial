// Exercise 1
// Create a button When the button is clicked, get the data from a given url with an AJAX call.
// Print the name of the academy in an h1 tag.
// Print all student names in an unordered list.
// URL: https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json
// NOTE: You need to parse this data before using it.

let btn = document.getElementById('btn')
let h1 = document.getElementById('academy')
let ul = document.getElementById('list')
btn.addEventListener('click',function(){
    fetch('https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json')
    .then(response => response.json())
    .then(data => {
        h1.textContent = data.academy
        ul.innerHTML = ''
        for(let student of data.students){
            let li = document.createElement('li')
            li.textContent = student
            ul.appendChild(li)
        }
})
    .catch(error => {
        console.log(error)
    })
})