// HOMEWORK Part 1

// Create OBJECT animal with 2 properties and 1 method:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs





// let animal = {
//     name: 'Bruno',
//     kind: 'Dog',

//     speak: function(message){
//         console.log(`${this.kind} says:${message}`)
//     }
// }
// let user = prompt('Enter message')
// animal.speak(user)





// HOMEWORK Part 2
// It is recommended to use AI tools for this task.

// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// Bonus: enter the values from prompt() or read them from HTML
// Thank you!
// Questions?

function ReadingStatus(title,author,readingStatus){
    this.title = title
    this.author = author
    this.readingStatus = readingStatus

    this.readingStat = function(){
        if(this.readingStatus === true){
            console.log(`Already read ${this.title} by ${this.author}`)
        }else{
            console.log(`You still need to read ${this.title} by ${this.author}`)
        }
    }
}

let titl = prompt('Enter title')
let auth = prompt('Enter author')
let readingStats = prompt('Enter true or false')


if(readingStats === 'true'){
     readingStats = true
}else if(readingStats === 'false'){
    readingStats = false
}else{
     console.log('Invalid Enter')
}
let book = new ReadingStatus(titl,auth,readingStats)

book.readingStat()