// Reminder App
// Create a reminder app
// There should be:
// An input for entering the title
// An input for entering priority
// An input for color
// A textarea for adding a description
// A button for adding the reminder
// A button for showing all reminders
// When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
// The object should then be added to an array of reminders
// When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// The title should be the color of the "color" property

let reminders = []
let title = document.getElementById('title')
let priority = document.getElementById('priority')
let color = document.getElementById('color')
let description = document.getElementById('desc')
let btnAddReminder = document.getElementById('btn')
let btnAllReminders = document.getElementById('btn-all')

btnAddReminder.addEventListener('click',function(){
    let remindersObj = {
        title: title.value,
        priority: priority.value,
        color: color.value,
        description: description.value,
    }
    reminders.push(remindersObj)
})
let div = document.getElementById('table')

btnAllReminders.addEventListener('click',function(){
    div.innerHTML = ''
    let table = document.createElement('table')
    let row = document.createElement('tr')
    let hTitle = document.createElement('th')
    let hPriority = document.createElement('th')
    let hDescription = document.createElement('th')
    table.appendChild(row)
    row.appendChild(hTitle)
    row.appendChild(hPriority)
    row.appendChild(hDescription)
    hTitle.textContent = 'Title'
    hPriority.textContent = 'Priority'
    hDescription.textContent = 'Description'
    div.appendChild(table)

    for(let reminder of reminders){
        let row1 = document.createElement('tr')
        let title1 = document.createElement('td')
        let priority1 = document.createElement('td')
        let description1 = document.createElement('td')
        row1.appendChild(title1)
        row1.appendChild(priority1)
        row1.appendChild(description1)
        title1.textContent= reminder.title
        title1.style.color = reminder.color
        priority1.textContent = reminder.priority
        description1.textContent = reminder.description

        table.appendChild(row1)
    }
})