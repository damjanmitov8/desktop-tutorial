// Homework #5
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

let arr = [5,3,6,11,14,7]
function minMaxNumbers(array){
    let max = arr[0]
    let min = arr[0]
    for(let number of arr){
        if(number > max){
            max = number
        }else if (number < min){
            min = number
        }
    }
    let sum = min + max
    return `Min:${min} Max${max} Sum:${sum}`
}
console.log(minMaxNumbers(arr))