const numberOne = prompt('Please enter the first number:', 0);
const numberTwo = prompt('Please enter the second number:', 0);

if(isNaN(numberOne) || isNaN(numberTwo)) { // + || numberTwo === 0
    console.log('Некорректный ввод!');
} else {
    const resultOne = +numberOne + +numberTwo;
    const resultTwo = numberOne / numberTwo;
    
    console.log(`Answer: ${resultOne}, ${resultTwo}`);
}