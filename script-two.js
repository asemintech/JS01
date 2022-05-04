let numberOne = prompt('Please enter the first number:', 0);
let numberTwo = prompt('Please enter the second number:', 0);

if(isNaN(numberOne) || isNaN(numberTwo)) { // + || numberTwo === 0
    console.log('Некорректный ввод!');
} else {
    let resultOne = +numberOne + +numberTwo;
    let resultTwo = numberOne / numberTwo;
    
    console.log(`Answer: ${resultOne}, ${resultTwo}`);
}