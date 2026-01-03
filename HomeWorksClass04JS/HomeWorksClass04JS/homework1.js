// HOMEWORK #1
// Create a function called tellStory()

// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

// The value that is returned from the function should be printed in the console or in alert

let storyData= ['Damjan', 'happy', 'studying']
function tellStory(data){
    let name = data[0]
    let mood = data[1]
    let activity = data[2]
    let text =`This is ${name}.${name} is a nice person.Today they are ${mood}.They are ${activity} all day.The End`
    return text
}

let result = tellStory(storyData)
console.log(result)