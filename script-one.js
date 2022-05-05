const NUMBER_ONE = prompt('Please enter the first number:', 0);
const NUMBER_TWO = prompt('Please enter the second number between 2 and 36:', 0);
const NUMBER_TWO_CHECK = isNaN(NUMBER_TWO) || NUMBER_TWO < 2 || NUMBER_TWO > 36;

if (isNaN(NUMBER_ONE) || NUMBER_TWO_CHECK) {
    console.log('Некорректный ввод!'); 
} else {
    const result = Math.floor(NUMBER_ONE).toString(NUMBER_TWO);
    
    console.log(result); 
}