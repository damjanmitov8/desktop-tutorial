let input = prompt('Enter number')
let parsedInput = Number(input)

function minutesToSeconds(minutes){
if(Number.isNaN(minutes)){
    return null
}if(minutes< 0){
    return null
}if(minutes === 0){
    return 0
}
    return minutes * 60
}

console.log(minutesToSeconds(parsedInput))

function hoursToMinutes(hours){
    if(Number.isNaN(hours)){
    return null
}else if(hours < 0){
    return null
}else if(hours === 0){
    return 0
}else {
    return hours * 60
}
}
console.log(hoursToMinutes(parsedInput))

function hoursToSeconds(hours){
    if(Number.isNaN(hours)){
        return null
}if(hours < 0){
    return null
}if(hours === 0){
    return 0
}
return hours * Math.pow(60 , 2)
}
console.log(hoursToSeconds(parsedInput))

function daysToHours(days){
    if(Number.isNaN(days)){
        return null;
    }if(days < 0){
        return null
    }if(days === 0){
        return 0
    }
    return days * 24
}
console.log(daysToHours(parsedInput))

function daysToSeconds(days){
    if(Number.isNaN(days)){
        return null
    }if(days < 0){
        return null;
    }if(days === 0){
        return 0
    }
    return days * 86400
}

console.log(daysToSeconds(parsedInput))

function isTruthyValue(value){
    if(value){
        return true 
    }else{
        return false
    }
}
console.log(isTruthyValue(parsedInput))

function areBothTruthy(a,b){
    if(a && b){
        return true
    }else{
        return false
    }
}
console.log(areBothTruthy(1,''))

function getStringLength(text){
    if(typeof text !== 'string'){
        return null
    }else {
        return text.length
    }
}

console.log(getStringLength(5))
console.log(getStringLength('hello'))
console.log(getStringLength(''))
console.log(getStringLength('a'))

function getFristAndLastChar(text){
    if(typeof text !== 'string'){
        return null
    }if(text.length < 2){
        return null
    }
    return text[0] + text[text.length - 1]
}
console.log(getFristAndLastChar('hello'))
console.log(getFristAndLastChar('ab'))
console.log(getFristAndLastChar('a'))
console.log(getFristAndLastChar(5))

function capitalizeIfLong(text){
    if(typeof text !== 'string'){
        return null
    }if(text.length >= 5 ){
        return text[0].toUpperCase() + text.slice(1)
    }else {
        return text
    }
}

console.log(capitalizeIfLong('damjan'))
console.log(capitalizeIfLong('abc'))
console.log(capitalizeIfLong(5))

function isVowel(char){
    if(char === 'a'|| char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return true
    }else 
        return false
}
console.log(isVowel('a'))
console.log(isVowel('j'))

function getLargeNumber(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return null
    }if(a === b){
        return a
    }
    return Math.max(a,b)
}

console.log(getLargeNumber(5,10))
console.log(getLargeNumber(7,7))
console.log(getLargeNumber('5',2))

function getMiddleNumber(a,b,c){
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
        return null
    }if( a === b || b == c || a === c ){
        return null
    }
    return a+b+c - Math.max(a,b,c) - Math.min(a,b,c)
}

console.log(getMiddleNumber(5,3,2))
console.log(getMiddleNumber(2,2,3))
console.log(getMiddleNumber('2',2,3))


function formatFullName(first , last){
    if(typeof first !== 'string' && last !== 'string'){
        return null
    }if(!first || !last){
        return null
    }
    return `${first} ${last}`
}
console.log(formatFullName('John', 'Doe'))
console.log(formatFullName('', 'Doe'))
console.log(formatFullName(5, 'Doe'))

function isValidUsername(username){
    if(typeof username !== 'string'){
        return false
    }else if(username.length <5 || username.length >12){
        return false
    }else if(!Number.isNaN(Number(username[0]))){
        return false
    }else {
        return true
    }
}
console.log(isValidUsername('damjan'))
console.log(isValidUsername('damj'))
console.log(isValidUsername('5damjan'))
console.log(isValidUsername('damjanmitovvv'))

