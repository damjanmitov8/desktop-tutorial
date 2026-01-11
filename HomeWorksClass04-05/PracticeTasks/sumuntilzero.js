// 7 ZADACA
function sumUntilZero() {
    let sum = 0;
    let input;
    do {
        input = parseInt(prompt("sumuntilzero: Enter number"));
        if(input !== 0) {
            sum += input;
        }
    } while(input !== 0);

    console.log(sum);
}
sumUntilZero()