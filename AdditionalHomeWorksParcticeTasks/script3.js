//  Requirements
// Store a predefined username and password in variables.

// Ask the user to enter a username and password using prompt().

// Check:

// If both the username and password match, display: "Login successful."
// Otherwise, display: "Incorrect username or password."
// ⭐ Bonus (Invalid Input Handling)
// If either the username or password is left empty, display: "Username and password cannot be empty."


let username = 'mitov'
let password = 'damjan'


let inputUser = prompt('Enter a username')
if(!inputUser){
    console.log('Username and password cannot be empty')
}else{
    let inputPass = prompt('Enter password')
    if(!inputPass){
        console.log('Username and password cannot be empty')
        }else{
            if (username === inputUser && password === inputPass){
                console.log('Login Successful')
            } else if (username !== inputUser || password !== inputPass)
                console.log('Incorrect password or username')
            }
        }




// Vtor Primer
// let username = 'mitov'
// let password = 'damjan'

// let inputUser = prompt('Enter a username')

// if (inputUser !== username) {
//     console.log('Incorrect username')
// } else {

//     let inputPass = prompt('Enter password')
//     if (inputPass === password) {
//         console.log('Login Successful')
//     } else {
//         console.log('Incorrect password')
//     }
// }
