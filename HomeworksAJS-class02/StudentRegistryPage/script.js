// Create a student registry page
// Create an HTML page with student registry form with
// First Name
// Last Name
// Age
// Email
// Create a student generator function
// When the form is submitted, the inputs should be compiled into a new object from the generator function Student
// This student should be added to a list called "database"
// After submit the database should be printed in the console
// The input fields should be cleared

let database = []
let form = document.getElementById('form')
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let age = document.getElementById('age')
let email = document.getElementById('email')

function Student(firstName,lastName,age,email){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.email = email
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    let student = new Student(firstName.value,lastName.value,age.value,email.value)
    database.push(student)
    form.reset()
    console.log(database)
})
