
// 2 ZADACA
function countEvenNumbers(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0)
            count++
        }
        return count
}
console.log(countEvenNumbers([2,3,4,5,6,8]))

// 3 ZADACA
function findSmallest(arr){
    let value = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < value){
            value = arr[i]
        }
    }
    return value
}
console.log(findSmallest([2,3,4,5]))

// 4 ZADACA 
function reverseArray(arr1){
    let arr = []
    for(let i = arr1.length - 1; i >= 0; i--){
        arr.push(arr1[i])
    }
    return arr
}
console.log(reverseArray([1,2,3]))

// 5 ZADACA
function sumPositiveNumbers(arrsum){
    let sum = 0
    for(let i = 0; i < arrsum.length; i++ ){
        if(arrsum[i] > 0){
            sum = sum + arrsum[i]
        }
    }
    return sum
}
console.log(sumPositiveNumbers([1,2,3,-2,-3,-4]))
console.log(sumPositiveNumbers([-2,-3,-4]))

// 6 ZADACA
function fizzBuzz(){
    for(let i = 1; i <= 100; i++)
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }else if(i % 3 === 0){
            console.log('Fizz')
        }else if(i % 5 === 0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
}
fizzBuzz()


function lognestString(arr){
    let longest = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest.length ){
            longest = arr[i]
        }
    }
    return longest
}
console.log(lognestString(['cat', 'tiger', 'dog', 'bear', 'elephant']))


function reverseNumber(number){
    let newnum = 0 
    while(number !== 0){
        let digit = number % 10
        newnum = newnum * 10 + digit
        number = Math.floor(number /10)
    }
    return newnum
}
console.log(reverseNumber(1234))

function isPrime(number){
    if(number <=1){
        return 'NOT PRIME'
    }
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return 'Not prime'
        }
    }
    return 'Prime'
}

console.log(isPrime(7))
console.log(isPrime(53))
console.log(isPrime(9))
console.log(isPrime(24))

function removeDuplicates(arr){
    let newarr = []
    for(let i = 0 ; i < arr.length; i++){
        if(!newarr.includes(arr[i])){   
            newarr.push(arr[i])
        }
    }
    return newarr
}
console.log(removeDuplicates([1,1,2,2,3,3]))
console.log(removeDuplicates([4,4,4]))

function sumOfDigits(number){
    let sum = 0
    while(number > 0){
        let digit = number % 10
        sum += digit 
        number = Math.floor(number / 10)
    }
    return sum
}
console.log(sumOfDigits(1001))
console.log(sumOfDigits(1253))

function isPalindrome(number){
    let str = number.toString()
    let reverse = ""
    for(let element of str){
        reverse = element + reverse 
    }
    if(str === reverse){
            return 'Palindrome'
        }else{
            return 'Not Palindrome'
        }
}
console.log(isPalindrome(121))
console.log(isPalindrome(123))

function isArmstrong(number){
    let str = number.toString()
    let sum = 0
    for(let digit of str){
        let num = Number(digit)
        sum += num ** str.length
    }
    if(number === sum ){
        return 'Armstrong'
    }else{
        return 'Not Armstrong'
    }
}
console.log(isArmstrong(153))
console.log(isArmstrong(123))

function calculatorWithHistory(calculations){
    let history = []
    for(let element of calculations){
        let num1 = element[0]
        let operator = element[1]
        let num2 = element[2]
        let result = 0
            switch(operator){
            case '+':
                result = num1+num2
                break;
            case '-':
                result = num1-num2
                break;
            case '*':
                result = num1*num2
                break;
            case '/':
                result = num1/num2
                break;
            default:
                'Invalid operator'
        }
         history.push(result)
    }
    return history
}
console.log(calculatorWithHistory([[5,"+",2],
    [5,"-",2],
    [4,"*",2],
    [4,"/",2]]))