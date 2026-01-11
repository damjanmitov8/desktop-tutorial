// 1 ZADACA
function calculateAverage(){
    let counter = Number(prompt('How many numbers you want to enter ?'))
    let arr =[]
    for(i = 0; i < counter; i++){
        let number = Number(prompt('Enter numbers'))
        arr.push(number)
    }
    let sum = 0 
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    let average = sum / arr.length
    return [ arr, average]
}
console.log(calculateAverage())