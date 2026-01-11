// 8 ZADACA 
function multiplicationTable(){
    let input = parseInt(prompt('Enter number'))
    let result;
    for(let i = 1; i <=10; i++){
        result = i * input
        console.log(`${i}*${input}=${result}`)
    }
}
    
multiplicationTable()