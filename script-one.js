const numberOne = prompt('Please enter the first number:', 0);
const numberTwo = prompt('Please enter the second number between 2 and 36:', 0);
const numberTwoCheck = isNaN(numberTwo) || numberTwo < 2 || numberTwo > 36;

if(isNaN(numberOne) || numberTwoCheck) {
    console.log('Некорректный ввод!'); 
} else {
    const result = Math.floor(numberOne).toString(numberTwo);
    
    console.log(result); 
}