const numberOne = prompt('Please enter the first number:', 0);
const numberTwo = prompt('Please enter the second number between 2 and 36:', 0);

if(isNaN(numberOne) || isNaN(numberTwo) || numberTwo < 2 || numberTwo > 36) {
    console.log('Некорректный ввод!'); 
} else {
    const result = Math.floor(numberOne).toString(numberTwo);
    
    console.log(result); 
}