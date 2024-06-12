// Напишите функцию, которая принимает число и выводит количество цифр в этом числе.

function sizeNumber(digit) {
    let counter = 1;
    if (digit < 0){
        digit *= -1;
    }
    while (digit > 10) {
        digit /= 10;
        counter++;
    }
    return counter;
}

console.log(sizeNumber(5)); // 1
console.log(sizeNumber(15)); // 2
console.log(sizeNumber(150)); // 3
console.log(sizeNumber(123456789)); // 9
console.log(sizeNumber(-150)); // 3