// 9 ZADACA 
function countDigits(){
    let input = parseInt(prompt('Enter number'))
    let counter = 0
    if(input === 0){
        counter = 1
    }
    while(input !== 0){
        counter++
        input= input / 10
        input = Math.floor(input)
    }
    return counter
}
console.log(countDigits())