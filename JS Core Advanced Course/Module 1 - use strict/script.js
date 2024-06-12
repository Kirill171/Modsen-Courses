// Напишите функцию, которая принимает массив и возвращает true, если в массиве есть дубликаты, и false, если нет. Используйте строгий режи.

'use strict';

function isDublicate(...massive) {
    for (let i = 0; i < massive.length; i++){
        for (let j = i + 1; j < massive.length; j++){
            if(massive[i] == massive[j]){
                return true;
            }
        }
    }
    return false;
}

console.log(isDublicate(1, 2, 3)); // false
console.log(isDublicate(1, 2, 2)); // true
console.log(isDublicate('apple', 'apple')); // true
console.log(isDublicate('apple', 'tower')); // false