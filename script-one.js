let numberOne = prompt('Please enter the first number:', 0);
let numberTwo = prompt('Please enter the second number between 2 and 36:', 0);

if(isNaN(numberOne) || isNaN(numberTwo) || numberTwo < 2 || numberTwo > 36) {
    console.log('Некорректный ввод!'); 
} else {
    let result = Math.floor(numberOne).toString(numberTwo);
    
    console.log(result); 
}