// Напишите функцию, которая принимает массив с числами и находит сумму тех элементов этого массива, которые больше нуля и меньше десяти.

function sumOfDigits(massive) {
    let sum = 0;
    for (let i = 0; i < massive.length; i++){
        if (massive[i] > 0 && massive[i] < 10){
            sum += massive[i];
        }
    }
    return sum;
}


console.log(sumOfDigits([2, 2, 2])); // 6
console.log(sumOfDigits([2, 4, 4])); // 10
console.log(sumOfDigits([4, 6])); // 10
console.log(sumOfDigits([-5, 15])); // 0
console.log(sumOfDigits([-5, 5, 5, 15])); // 10

// Так как не сказано, что выводить в случаях когда числа не подходят под нужный диапазон чисел, функция возвращает 0.