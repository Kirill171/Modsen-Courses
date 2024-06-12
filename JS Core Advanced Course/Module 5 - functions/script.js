// Напишите функцию, которая генерирует идентификатор строки (указанной длины) из случайных символов.

function randomName(digit) {
    if (digit < 0) {
        return 'Указанная длина должна быть больше 0!';
    }

    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let stringIdentifier = '';

    for (let i = 0; i < digit; i++) {
        let randomIndex = Math.floor(Math.random() * symbols.length);
        stringIdentifier += symbols[randomIndex];
    }
    return stringIdentifier;
}

console.log(randomName(5)); // random 5 symbols
console.log(randomName(-10)); // Указанная длина должна быть больше 0!
console.log(randomName(15)); // random 15 symbols