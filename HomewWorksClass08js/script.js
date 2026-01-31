// Homework
// Create a dynamic table
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use AI tools! :)


let rows = document.getElementById('rows')
let columns = document.getElementById('columns')
let button = document.getElementById('btn')
let container = document.getElementById('container')

button.addEventListener('click', function(){
    let r = Number(rows.value)
    let c = Number(columns.value)
    let tableBox = document.createElement('table')
    for(let i = 1; i <= r; i++){
        let tableRow = document.createElement('tr')
        for(let j = 1; j <= c; j++){
            let tableColumn = document.createElement('td')
            tableColumn.textContent = `${i} ${j}`
            tableRow.appendChild(tableColumn)
        }
        tableBox.appendChild(tableRow)
    }
     container.appendChild(tableBox)
})