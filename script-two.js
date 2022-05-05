const NUMBER_ONE = prompt('Please enter the first number:', 0);
const NUMBER_TWO = prompt('Please enter the second number:', 0);

if (isNaN(NUMBER_ONE) || isNaN(NUMBER_TWO)) { // || NUMBER_TWO === 0
    console.log('Некорректный ввод!');
} else {
    const resultOne = +NUMBER_ONE + +NUMBER_TWO;
    const resultTwo = NUMBER_ONE / NUMBER_TWO;
    
    console.log(`Answer: ${resultOne}, ${resultTwo}`);
}